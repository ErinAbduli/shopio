import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/components/ui/input-group';

import { SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';

import { ChevronDown, SearchIcon, ShoppingBasket } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { login } from '../routes';

import { toast } from 'sonner';

const Navbar = () => {
    const { auth } = usePage<SharedData>().props;

    const handleLogoutClick = () => {
        toast.warning('You have been logged out.', { duration: 3000 });
    };

    return (
        <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-background px-7">
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold">Shopio</h1>
            </div>
            <div className="flex items-center justify-center px-4">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-5">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/">
                                Shop
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <InputGroup>
                                <InputGroupInput placeholder="Search..." />
                                <InputGroupAddon>
                                    <SearchIcon />
                                </InputGroupAddon>
                            </InputGroup>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuViewport className="top-full" />
                </NavigationMenu>
            </div>
            <div className="flex flex-row gap-3">
                <Button variant="ghost">
                    <ShoppingBasket /> Cart
                </Button>
                {auth.user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="hidden md:flex">
                                Profile <ChevronDown className="ml-1" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem asChild>
                                <Link href="#" className="cursor-pointer">
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#" className="cursor-pointer">
                                    Orders
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    onClick={handleLogoutClick}
                                    className="w-full cursor-pointer"
                                >
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Button variant="outline">
                        <Link href={login()}>Log In</Link>
                    </Button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
// } from '@/components/ui/navigation-menu';

// import {
//     InputGroup,
//     InputGroupAddon,
//     InputGroupInput,
// } from '@/components/ui/input-group';

// import { SharedData } from '@/types';
// import { Link, usePage } from '@inertiajs/react';

// import { SearchIcon, ShoppingBasket } from 'lucide-react';

// import { Button } from '@/components/ui/button';

// import { login } from '../routes';

// const Navbar = () => {
//     const { auth } = usePage<SharedData>().props;
//     return (
//         <nav className="relative z-50 flex w-full items-center justify-between border-b px-4">
//             <div className="flex items-center gap-2">
//                 <h1 className="text-lg font-bold">Shopio</h1>
//             </div>
//             <div className="flex h-15 items-center justify-center px-4">
//                 <NavigationMenu>
//                     <NavigationMenuList className="flex gap-5">
//                         <NavigationMenuItem>
//                             <NavigationMenuLink href="/">
//                                 Shop
//                             </NavigationMenuLink>
//                         </NavigationMenuItem>
//                         <NavigationMenuItem>
//                             <InputGroup>
//                                 <InputGroupInput placeholder="Search..." />
//                                 <InputGroupAddon>
//                                     <SearchIcon />
//                                 </InputGroupAddon>
//                             </InputGroup>
//                         </NavigationMenuItem>
//                     </NavigationMenuList>
//                 </NavigationMenu>
//             </div>
//             <div className="flex flex-row items-center gap-3">
//                 <Button variant="ghost">
//                     <ShoppingBasket /> Cart
//                 </Button>
//                 {auth.user ? (
//                     <NavigationMenu>
//                         <NavigationMenuList>
//                             <NavigationMenuItem>
//                                 <NavigationMenuTrigger>
//                                     {auth.user.name || 'Account'}
//                                 </NavigationMenuTrigger>
//                                 <NavigationMenuContent>
//                                     <ul className="grid w-[200px] gap-2 p-4">
//                                         <li>
//                                             <NavigationMenuLink asChild>
//                                                 <Link
//                                                     href="#"
//                                                     className="block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                                 >
//                                                     Profile
//                                                 </Link>
//                                             </NavigationMenuLink>
//                                         </li>
//                                         <li>
//                                             <NavigationMenuLink asChild>
//                                                 <Link
//                                                     href="#"
//                                                     className="block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                                 >
//                                                     Orders
//                                                 </Link>
//                                             </NavigationMenuLink>
//                                         </li>
//                                         <li>
//                                             <NavigationMenuLink asChild>
//                                                 <Link
//                                                     href="#"
//                                                     className="block rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                                                 >
//                                                     Settings
//                                                 </Link>
//                                             </NavigationMenuLink>
//                                         </li>
//                                     </ul>
//                                 </NavigationMenuContent>
//                             </NavigationMenuItem>
//                         </NavigationMenuList>
//                         <NavigationMenuViewport className="top-full right-0 left-auto" />
//                     </NavigationMenu>
//                 ) : (
//                     <Button variant="outline">
//                         <Link href={login()}>Log In</Link>
//                     </Button>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
