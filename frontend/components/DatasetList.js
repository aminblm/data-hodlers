function DatasetList() {
    return (
        <>
            <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-10">
          <div className="flex justify-between items-center mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Datasets</h5>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
              </a>
          </div>
          <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2015/03/chocolateWhiteDark-454384771-770x533-1-745x490.jpg" alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Chocolate Dataset 2022
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Size: 20 KB
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $320
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/440px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg" alt="Bonnie image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Solar Energy Dataset 2022
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Size: 57 KB
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $3467
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://www.expatica.com/app/uploads/sites/17/2021/01/job-hunting-online.jpg" alt="Michael image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Employer Dataset 2022
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Size: 103 KB
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $67
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/smap-weather.jpg" alt="Lana image"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Weather Dataset 2022
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    Size: 19 KB
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $367
                            </div>
                        </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://purepaypayments.com/wp-content/uploads/2018/11/kycpurepay.jpg" alt="Thomas image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  N26 KYC Dataset 2022
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  Size: 77 KB
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $2367
                            </div>
                        </div>
                    </li>
                </ul>
          </div>
            </div>
        </>
    )
}

export default DatasetList