import LocomotiveScroll from 'locomotive-scroll';
import { LinkButton } from './LinkButton';
interface NavProps {
    link: string;
    title: string;
}

export function Nav({ navigation }: { navigation: NavProps[] }) {

    return (
        <nav className="px-5 lg:px-12 mt-4 fixed top-0 left-0 w-full z-50">
            <ul className="hidden lg:flex flex-row justify-end gap-4 text-small">
                {navigation.map((item) => (
                    <li key={item.title}>    
                        <LinkButton variant='nav' href={item.link}>{item.title}</LinkButton>
                    </li>
                ))}
            </ul>
        </nav>
    )
}