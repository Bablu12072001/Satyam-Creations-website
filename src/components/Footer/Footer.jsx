import { Link } from "react-router-dom";
import logo from "/src/assets/Satyam creation.png";
export default function Footer() {
  return (
    <footer className="bg-gray-300 border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-40" alt="Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61558691976541&mibextid=LQQJ4d"
                    className="hover:underline"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/satyamcreations9?igsh=MWRoZnM4cTJ5bTBsYw%3D%3D&utm_source=qr"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between text-center sm:text-left p-4 bg-gray-100">
          <span className="text-sm text-gray-500">
            © 2024
            <a href="#" className="hover:underline">
              {" "}
              Satyam Creations
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 sm:mt-0">
            <a
              href="https://www.p5digital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <p className="text-gray-500 font-serif text-sm hover:text-blue-500">
                Developed by P5 digital solutions
              </p>
            </a>
          </div>
          <div className="flex justify-center mt-4 space-x-5 sm:mt-0">
            <Link
              to="https://www.facebook.com/profile.php?id=61558691976541&mibextid=LQQJ4d"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="https://www.instagram.com/satyamcreations9?igsh=MWRoZnM4cTJ5bTBsYw%3D%3D&utm_source=qr"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.055 2.006.248 2.478.415.615.214 1.062.472 1.53.94.469.469.726.915.94 1.53.167.472.36 1.272.415 2.478.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.206-.248 2.006-.415 2.478-.214.615-.472 1.062-.94 1.53-.469.469-.915.726-1.53.94-.472.167-1.272.36-2.478.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.055-2.006-.248-2.478-.415-.615-.214-1.062-.472-1.53-.94-.469-.469-.726-.915-.94-1.53-.167-.472-.36-1.272-.415-2.478-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.055-1.206.248-2.006.415-2.478.214-.615.472-1.062.94-1.53.469-.469.915-.726 1.53-.94.472-.167 1.272-.36 2.478-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.276.058-2.154.263-2.919.563-.796.312-1.47.732-2.144 1.406-.674.674-1.094 1.348-1.406 2.144-.3.765-.505 1.643-.563 2.919-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.276.263 2.154.563 2.919.312.796.732 1.47 1.406 2.144.674.674 1.348 1.094 2.144 1.406.765.3 1.643.505 2.919.563 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.276-.058 2.154-.263 2.919-.563.796-.312 1.47-.732 2.144-1.406.674-.674 1.094-1.348 1.406-2.144.3-.765.505-1.643.563-2.919.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.276-.263-2.154-.563-2.919-.312-.796-.732-1.47-1.406-2.144-.674-.674-1.348-1.094-2.144-1.406-.765-.3-1.643-.505-2.919-.563-1.28-.058-1.688-.072-4.947-.072z" />
                <path d="M12 5.838c-3.404 0-6.162 2.757-6.162 6.162 0 3.404 2.757 6.162 6.162 6.162 3.404 0 6.162-2.757 6.162-6.162 0-3.404-2.757-6.162-6.162-6.162zm0 10.277c-2.267 0-4.115-1.848-4.115-4.115s1.848-4.115 4.115-4.115 4.115 1.848 4.115 4.115-1.848 4.115-4.115 4.115z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
