import "./index.css";
function Card() {
  return (
    <div className="card-container">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Nepal
          </h5>
          
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQXtiPVcOqG4mrrpo-KEmldp-lcyxFpm_FPLOxHmXtDKwgJwa4f_Vr79jmCk3TeVd7yLNg1ZuTd5LAkGAM"
                    alt=" image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    RHODODENDRON
                  </p>
                  
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  National Flower
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/159975381/320"
                    alt=" image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    LOPHOPHOROUS
                  </p>
                  
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  National BIRD
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"
                    alt=" image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    COW
                  </p>
                  
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  National ANIMAL
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Card;