"use client";

import * as React from "react";
import { useState } from "react";
import {
  // Layout Components
  Container,
  Row,
  Column,
  Grid,
  Section,

  // Typography & Content
  Heading,
  Text,

  // Form Components
  Button,
  IconButton,
  TextInput,
  Checkbox,
  Switch,
  Slider,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,

  // Navigation Components
  NavBar,
  TabContent,
  TabMenu,
  Tabs,

  // Display Components
  Badge,
  Card,
  Image,
  Icon,
  Separator,
  Progress,

  // Interactive Components
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  RadioGroup,
  RadioGroupItem,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,

  // Menu Components
  MenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,

  // Overlay Components
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Popover,
  PopoverTrigger,
  PopoverContent,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,

  // Utility Components
  StateLayer,
  MaterialLayer,
  PlaceholderBlock,
  Sticker,
  GoldenBox,

  // Theme Components
  ThemeProvider,
  ThemeController,
} from "@/registry/nextjs/components";

export default function ComponentMosaicPage() {

  React.useEffect(() => {
    // Animate progress bar
    const timer = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
 
    </>
  );
}
