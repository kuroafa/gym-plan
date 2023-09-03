import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

type Props = {};

const HoverNavbar = (props: Props) => {
  return <div>
     <div className=" pr-1">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem className="hidden md:flex">
                      <NavigationMenuTrigger>
                        Work-Out Tips
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden md:flex">
                      <NavigationMenuTrigger>
                        How to Use Gymify
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hidden md:flex">
                      <NavigationMenuTrigger>
                        Creating a lasting PLAN
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
  </div>;
};

export default HoverNavbar;
