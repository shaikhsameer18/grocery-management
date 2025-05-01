import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import MenuItem from '../components/MenuItem';
import { SlidersHorizontal, Search } from 'lucide-react';

const Menu = () => {
    const { menuItems } = useContext(ShopContext);
    const [sortedMenu, setSortedMenu] = useState([]);
    const [sortType, setSortType] = useState('relevant');
    const [searchQuery, setSearchQuery] = useState('');

    const sortMenu = () => {
        let menuCopy = [...menuItems];

        // Apply search filter
        if (searchQuery) {
            menuCopy = menuCopy.filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply sorting
        switch (sortType) {
            case 'low-high':
                setSortedMenu(menuCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setSortedMenu(menuCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                setSortedMenu(menuCopy);
                break;
        }
    };

    useEffect(() => {
        sortMenu();
    }, [sortType, menuItems, searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Header */}
                <div className="pb-6 border-b">
                    <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Our Menu
                            </h1>
                            <p className="mt-2 text-sm text-gray-600">
                                {sortedMenu.length} items available
                            </p>
                        </div>

                        <div className="flex flex-col w-full gap-4 md:flex-row md:w-auto">
                            {/* Search Bar */}
                            <div className="relative flex-1 md:w-64 md:flex-none">
                                <Search className="absolute w-4 h-4 text-gray-400 left-3 top-2.5" />
                                <input
                                    type="text"
                                    placeholder="Search menu..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-white border rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>

                            {/* Sort Dropdown */}
                            <div className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg">
                                <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                                <select
                                    onChange={(e) => setSortType(e.target.value)}
                                    className="text-sm text-gray-600 bg-transparent border-none outline-none focus:ring-0"
                                >
                                    <option value="relevant">Sort by: Relevant</option>
                                    <option value="low-high">Price: Low to High</option>
                                    <option value="high-low">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Grid */}
                <div className="py-8">
                    {sortedMenu.length > 0 ? (
                        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
                            {sortedMenu.map((item) => (
                                <MenuItem
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    category={item.category}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20">
                            <p className="text-lg text-gray-600">No menu items found</p>
                            <p className="mt-2 text-sm text-gray-500">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
