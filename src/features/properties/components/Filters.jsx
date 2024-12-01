import "../style/Filters.css";

const Filters = ({ filters, handleInputChange, handleFilterSubmit, translation }) => {
    return (
        <div className="w-full max-w-8xl mx-auto px-4">
            <form
                className="filters-form w-full grid grid-cols-1 md:grid-cols-4 gap-4"
                onSubmit={handleFilterSubmit}
            >
                <div className="form-group col-span-4 md:col-span-1">
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                        {translation.propertiesPage.filters.name}
                    </label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={filters.Name}
                        onChange={handleInputChange}
                        placeholder={translation.propertiesPage.filters.name}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="form-group col-span-4 md:col-span-1">
                    <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
                        {translation.propertiesPage.filters.address}
                    </label>
                    <input
                        type="text"
                        id="Address"
                        name="Address"
                        value={filters.Address}
                        onChange={handleInputChange}
                        placeholder={translation.propertiesPage.placeholders.address}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="form-group col-span-4 md:col-span-1">
                    <label htmlFor="MinPrice" className="block text-sm font-medium text-gray-700">
                        {translation.propertiesPage.filters.minPrice}
                    </label>
                    <input
                        type="number"
                        id="MinPrice"
                        name="MinPrice"
                        value={filters.MinPrice}
                        onChange={handleInputChange}
                        placeholder={translation.propertiesPage.placeholders.minPrice}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="form-group col-span-4 md:col-span-1">
                    <label htmlFor="MaxPrice" className="block text-sm font-medium text-gray-700">
                        {translation.propertiesPage.filters.maxPrice}
                    </label>
                    <input
                        type="number"
                        id="MaxPrice"
                        name="MaxPrice"
                        value={filters.MaxPrice}
                        onChange={handleInputChange}
                        placeholder={translation.propertiesPage.placeholders.maxPrice}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="form-group col-span-4 flex items-center justify-center">
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-purple-700 text-white py-2 px-4 rounded-lg button-filter"
                    >
                        {translation.propertiesPage.filters.filterButton}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Filters;
