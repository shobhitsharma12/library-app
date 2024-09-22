import useStore from '../store/store';

const AssetModal = ({ asset, onClose }) => {
    const { favorites, toggleFavorite } = useStore();

    const isFavorited = favorites.includes(asset);

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
                <h2 className="text-2xl font-bold mb-4">{asset.name}</h2>
                <p className="mb-4">{asset.description}</p>

                <button
                    className={`px-4 py-2 rounded ${isFavorited ? 'bg-red-500' : 'bg-green-500'} text-white`}
                    onClick={() => toggleFavorite(asset)}
                >
                    {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>

                <button
                    className="mt-4 block text-blue-500"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default AssetModal;
