function Footer() {
  return (
    <div>
      <footer className="bg-[#454545] rounded-lg shadow text-white m-4 h-24 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQGXdqMkzDJHTw/company-logo_200_200/0/1651350705416?e=2147483647&v=beta&t=8djHo1N_rHgBShPoNckIsz_R1tNxZtHUiquVlEbtLl8"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Takeo
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 text-white">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm  sm:text-center text-white">
            © 2023{" "}
            <a
              href="https://flowbite.com/"
              className="hover:underline text-white"
            >
              Takeo™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
