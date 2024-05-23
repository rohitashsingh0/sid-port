import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    section: 'Menu',
    link: [
      { name: 'Home', url: '/' },
      { name: 'My Work', url: '/mywork' },
      { name: 'About', url: '/about' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  // {
  //   id: 2,
  //   section: 'Category',
  //   link: [
  //     { name: 'Design', url: '/design' },
  //     { name: 'Mockup', url: '/mockup' },
  //     { name: 'View all', url: '/all' },
  //     { name: 'Log In', url: '/login' },
  //   ],
  // },
  // {
  //   id: 3,
  //   section: 'Pages',
  //   link: [
  //     { name: '404', url: '/404' },
  //     { name: 'Instructions', url: '/instructions' },
  //     { name: 'License', url: '/license' },
  //   ],
  // },
  {
    id: 4,
    section: 'Others',
    link: [
      { name: 'Services', url: '/services' },
      { name: 'smm', url: 'https://proeasysmmpanel.in/' },
    ],
  },
];

// const products: ProductType[] = [
//   {
//     id: 1,
//     section: "Menu",
//     link: ["Home", "Popular", "About", "Contact"],
//   },
//   {
//     id: 2,
//     section: "Category",
//     link: ["Design", "Mockup", "View all", "Log In"],
//   },
//   {
//     id: 3,
//     section: "Pages",
//     link: ["404", "Instructions", "License"],
//   },
//   {
//     id: 4,
//     section: "Others",
//     link: ["Styleguide", "Changelog"],
//   },
// ];

const Footer = () => {
  return (
    <div className="bg-black w-full" id="first-section">
      <div className="mx-auto max-w-5xl pt-1 pb-16 px-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 flex flex-wrap justify-between gap-y-10">
          {/* COLUMN-1 */}

          <div className="col-span-4">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20"> Sidharth</h3>
            <div className="flex gap-4">
              <div className="footer-icons">
                <Link href="https://facebook.com/sidharth">
                  <Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://twitter.com/sidharth">
                  <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://instagram.com/sidharth">
                  <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link, index) => (
                  <li key={index} className="mb-5">
                    <Link href={link.url} passHref>
                      <span className="text-white text-lg font-normal mb-6 space-links">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link, index) => (
                  <li key={index} className="mb-5">
                    <Link href="/" className="text-white text-lg font-normal mb-6 space-links">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </div>

      {/* All Rights Reserved */}

      <div className="mx-auto max-w-5xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                @2023 - All Rights Reserved by{' '}
                <Link href="/" target="_blank">
                  {' '}
                  Sidharth
                </Link>
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
