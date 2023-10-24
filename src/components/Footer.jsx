import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="flex justify-space-between">
      {footerLinks.map((footerLink => (
        <div key={footerLink.id}>
          <h4 className="text-white text-xl mb-4 mr-10">{footerLink.title}</h4>
          <ul className="list-none">
            {footerLink.links.map((link) => (
              <li key={link.id} className="text-white text-xs mb-2">
                <a href={`#${link.url}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )))}
      
    </footer>
  )
}

export default Footer

