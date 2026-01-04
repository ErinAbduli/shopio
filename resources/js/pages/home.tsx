import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';

import { Link } from '@inertiajs/react';

const Home = () => {
    return (
        <nav className="flex w-full items-center justify-between border-b px-4">
            <div className="flex h-15 items-center justify-center px-4">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-2">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/docs">Docs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/blog">Blog</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link href="/about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div>
                <Button variant="outline">Log In</Button>
            </div>
        </nav>
    );
};

export default Home;
