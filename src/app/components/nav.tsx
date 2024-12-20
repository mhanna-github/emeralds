import { LinkButton } from './LinkButton';
import { createClient } from "@/prismicio";


export async function Nav() {
    const client = createClient();
    const navigation = await client.getSingle("navigation");

    return (
        <nav className="px-5 lg:px-12 mt-4 fixed top-0 left-0 w-full z-50">
            <ul className="flex flex-row justify-center lg:justify-end gap-8 lg:gap-4 text-small">
                {navigation.data.item.map((item) => (
                    <li key={item.label} className='w-fit'>    
                        <LinkButton 
                            variant='nav' 
                            href={item.link} 
                            label={item.label || ''} 
                        />
                    </li>
                ))}
            </ul>
        </nav>
    )
}