import { useState } from 'react';
import useStore from '../store/store';
import { assets } from '../data';
import AssetModal from '../components/AssetModal';

export default function Library() {
    const { searchQuery, setSearchQuery, addRecentSearch, recentSearches } = useStore();
    const [selectedAsset, setSelectedAsset] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        addRecentSearch(searchQuery);
    };

    const filteredAssets = assets.filter((asset) =>
        asset.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Library</h1>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for KPIs, Layouts, or Storyboards"
                    className="border rounded px-4 py-2 w-full mb-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Search
                </button>
            </form>

            <div>
                <h2 className="text-lg font-semibold mb-2">Recent Searches</h2>
                <ul className="mb-4">
                    {recentSearches.map((search, index) => (
                        <li key={index} className="text-gray-600">
                            {search}
                        </li>
                    ))}
                </ul>

                <h2 className="text-lg font-semibold mb-2">Search Results</h2>
                <ul>
                    {filteredAssets.map((asset) => (
                        <li
                            key={asset.id}
                            className="border rounded p-4 mb-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => setSelectedAsset(asset)}
                        >
                            <strong>{asset.name}</strong> - {asset.type}
                            <p>{asset.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {selectedAsset && (
                <AssetModal asset={selectedAsset} onClose={() => setSelectedAsset(null)} />
            )}
        </div>
    );
}
