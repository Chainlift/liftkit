"use client";

import React from "react";
import {
  User,
  Settings,
  Plus,
  UserPlus,
  Mail,
  MessageSquare,
  PlusCircle,
  Github,
  LifeBuoy,
  Cloud,
  Keyboard,
  CreditCard,
  Users,
  UserCheck,
  Check,
  ChevronRight,
  LogOut,
} from "lucide-react";
import Button from "@/registry/nextjs/components/button";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
  DropdownMenuItemIndicator,
  DropdownMenuShortcut,
} from "@/registry/nextjs/components/dropdown-menu";

export default function DropdownMenuDemo() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Heading fontClass="display2">Dropdown Menu Examples</Heading>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
            {/* Basic Dropdown */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Basic Menu
              </Heading>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent style={{ width: "200px" }}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Checkbox Items */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                With Checkboxes
              </Heading>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Checkboxes</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent style={{ width: "200px" }}>
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                    <DropdownMenuItemIndicator>
                      <Check style={{ width: "1rem", height: "1rem" }} />
                    </DropdownMenuItemIndicator>
                    Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                    <DropdownMenuItemIndicator>
                      <Check style={{ width: "1rem", height: "1rem" }} />
                    </DropdownMenuItemIndicator>
                    Activity Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem checked={false} disabled>
                    <DropdownMenuItemIndicator>
                      <Check style={{ width: "1rem", height: "1rem" }} />
                    </DropdownMenuItemIndicator>
                    Panel (disabled)
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Radio Group */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Radio Group
              </Heading>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Radio Items</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent style={{ width: "200px" }}>
                  <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                    <DropdownMenuRadioItem value="pedro">
                      <DropdownMenuItemIndicator>
                        <div
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            backgroundColor: "currentColor",
                            borderRadius: "50%",
                          }}
                        />
                      </DropdownMenuItemIndicator>
                      Top
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="colm">
                      <DropdownMenuItemIndicator>
                        <div
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            backgroundColor: "currentColor",
                            borderRadius: "50%",
                          }}
                        />
                      </DropdownMenuItemIndicator>
                      Bottom
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      <DropdownMenuItemIndicator>
                        <div
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            backgroundColor: "currentColor",
                            borderRadius: "50%",
                          }}
                        />
                      </DropdownMenuItemIndicator>
                      Right
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Complex Menu with Submenus */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Complex Menu
              </Heading>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Complex</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent style={{ width: "240px" }}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Plus style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Github style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>GitHub</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <Cloud style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>API</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }} />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Destructive Item */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                With Destructive Action
              </Heading>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Actions</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent style={{ width: "200px" }}>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem data-variant="destructive">
                    Delete
                    <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
