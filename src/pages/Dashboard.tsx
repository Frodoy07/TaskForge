import NavBar from "@/components/NavBar";
import { Link } from "react-router";
import { FolderKanban, SquareActivity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <section className="grid grid-cols-[25%_75%] h-[calc(100vh-4rem)] overflow-hidden">
        {/* Sidebar */}
        <aside className="bg-[var(--sidebar)] p-4 overflow-y-hidden">
          <Button
            asChild
            variant="ghost"
            size="sidebarItem"
            className="w-full justify-start"
          >
            <Link to="/">
              <FolderKanban className="size-4" />
              Board
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="sidebarItem"
            className="w-full justify-start"
          >
            <Link to="/">
              <SquareActivity className="size-4" />
              Home
            </Link>
          </Button>

          <div className="h-[1px] bg-muted my-2" />

          <h3 className="text-sm px-4 mt-4 text-gray-500">Workspaces</h3>

          <Accordion type="single" collapsible>
            <AccordionItem value="account">
              <AccordionTrigger className="flex items-center rounded-md px-4 py-2 justify-start hover:bg-accent hover:text-accent-foreground transition-colors">
                <div className="size-8 rounded-md text-center bg-[var(--accent)] overflow-hidden">
                  <p className="text-lg font-bold">M</p>
                </div>

                <div className="flex flex-col text-left mr-12">
                  <span className="text-sm font-medium text-foreground">
                    TaskForge App
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Project Overview
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Button variant="ghost" className="w-full justify-start">
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Billing
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>

        {/* Main content */}
        <main className="relative p-6 overflow-y-auto">
          <h2>Children components here...</h2>

          <div className="absolute bottom-4 right-4">
            <ModeToggle />
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
