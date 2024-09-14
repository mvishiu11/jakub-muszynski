"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, BarChart2, Heart, Home, User } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const routes = [
  { name: "Home", path: "/", icon: Home },
  { name: "Activity", path: "/activity", icon: Activity },
  { name: "Health", path: "/health", icon: Heart },
  { name: "Stats", path: "/stats", icon: BarChart2 },
]

export function Component() {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-900 text-white border-b border-purple-700">
      <div className="container mx-auto px-4">
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            {routes.map((route) => (
              <NavigationMenuItem key={route.path}>
                <Link href={route.path} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-gray-800",
                      pathname === route.path
                        ? "text-purple-300 font-semibold"
                        : "text-gray-300"
                    )}
                  >
                    <route.icon className="w-4 h-4 mr-2" />
                    {route.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-gray-800 text-gray-300">
                <User className="w-4 h-4 mr-2" />
                Profile
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[200px] bg-gray-800 text-gray-300">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/profile"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-purple-300"
                      >
                        <div className="text-sm font-medium leading-none">View Profile</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          See and edit your profile information
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/settings"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-purple-300"
                      >
                        <div className="text-sm font-medium leading-none">Settings</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                          Customize your app preferences
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <button
                      className="w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-purple-300"
                      onClick={() => console.log("Logout clicked")}
                    >
                      <div className="text-sm font-medium leading-none">Logout</div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                        Sign out of your account
                      </p>
                    </button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}