// import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/navlinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label='Himanshu'>
          <div className="flex items-center justify-between">
            {typeof 'Himanshu' === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {'Himanshu Joshi'}
              </div>
            ) : (
              'Himanshu Joshi'
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          // .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
