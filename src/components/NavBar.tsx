import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Search,
  Megaphone,
  CircleHelp,
  Bell,
  Ellipsis,
  Bolt,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <NavigationMenu className="shadow-sm max-w-none w-full block">
      <NavigationMenuList className="justify-between gap-3 w-full px-3">
        <NavigationMenuItem>
          <img
            src="taskforge.webp"
            alt="taskforge image"
            className="h-12 w-auto md:mr-20"
          />
        </NavigationMenuItem>
        <NavigationMenuItem className="flex gap-1 md:flex-2 ">
          <Popover>
            <PopoverTrigger className=" relative items-center w-full">
              <span className="absolute -left-8 top-1 md:left-2 md:top-1.5">
                <Search
                  size={20}
                  className="text-gray-400 dark:text-gray-500"
                />
              </span>

              <input
                type="text"
                placeholder="Search"
                className="hidden w-full md:block py-0.5 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg pl-9 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              sideOffset={4}
              className="w-[var(--radix-popover-trigger-width)] bg-popover border shadow-md rounded-xl p-2"
            >
              <div className="text-md text-gray-700 p-2 mb-2">
                RECENT BOARDS
              </div>
              <div className="flex flex-col space-y-1">
                <button className="text-left hover:bg-accent p-2 rounded-md">
                  React
                </button>
                <button className="text-left hover:bg-accent p-2 rounded-md">
                  Tailwind
                </button>
                <button className="text-left hover:bg-accent p-2 rounded-md">
                  Next.js
                </button>
                <Separator className="my-2" />
                <button className="text-left hover:bg-accent p-2 rounded-md flex items-center gap-2">
                  <Bolt /> <span>Advanced search</span>
                </button>
              </div>
            </PopoverContent>
          </Popover>
          <Button className="md:mt-0.5">Create</Button>
        </NavigationMenuItem>
        <NavigationMenuItem className="flex gap-1 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="md:hidden">
                <Ellipsis />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-72 rounded-md shadow-sm py-3 px-3 mt-7"
              align="start"
            >
              <DropdownMenuGroup>
                <DropdownMenuItem className="my-2 flex gap-2">
                  <Avatar className="w-6 h-6 bg-[var(--profile-bg)]">
                    <AvatarFallback>FF</AvatarFallback>
                  </Avatar>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="my-2 flex gap-2">
                  <Megaphone /> <span>Feedback</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="my-2 flex gap-2">
                  <Bell /> <span>Notification</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="my-2 flex gap-2">
                  <CircleHelp /> <span>Information</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-4 h-px bg-muted" />

                <DropdownMenuItem className="my-2 flex gap-2">
                  <LogOut />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Icons and avatar */}
          <div className="justify-between gap-1 item-center hidden md:flex">
            <div className="p-2  hover:bg-gray-200 rounded-sm transition-colors">
              <Megaphone size={18} />
            </div>
            <div className="p-2 hover:bg-gray-200 rounded-sm transition-colors">
              <CircleHelp size={18} />
            </div>
            <div className="p-2 hover:bg-gray-200 rounded-sm transition-colors">
              <Bell size={18} />
            </div>
            <Avatar className="w-7 h-7 mt-1 bg-[var(--profile-bg)] text-black">
              <AvatarFallback>FF</AvatarFallback>
            </Avatar>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
