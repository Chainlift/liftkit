"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Icon from "@/registry/nextjs/components/icon";
import IconButton from "@/registry/nextjs/components/icon-button";
import NavBar from "@/registry/nextjs/components/navbar";
import Row from "@/registry/nextjs/components/row";
import Card from "@/registry/nextjs/components/card";
import Tabs from "@/registry/nextjs/components/tabs";
import TextInput from "@/registry/nextjs/components/text-input";
import { Dropdown, DropdownTrigger, DropdownMenu } from "@/registry/nextjs/components/dropdown";
import Button from "@/registry/nextjs/components/button";
import MenuItem from "@/registry/nextjs/components/menu-item";
import Text from "@/registry/nextjs/components/text";
import StateLayer from "@/registry/nextjs/components/state-layer";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "@/registry/nextjs/components/theme";

export default function TestApp() {
  const { updateTheme } = useContext(ThemeContext);

  const theme1 = {
    primary: "#035eff",
    secondary: "#badcff",
    tertiary: "#00ddfe",
    neutral: "#000000",
    neutralvariant: "#3f4f5b",
    error: "#dd305c",
    warning: "#feb600",
    success: "#0cfecd",
    info: "#175bfc",
  };

  const theme2 = {
    primary: "#FFDE3F",
    secondary: "#9B9168",
    tertiary: "#6D9B7B",
    neutral: "#949088",
    neutralvariant: "#969080",
    error: "#FF5449",
    warning: "#8b4f24",
    success: "#35693f",
    info: "#415f91",
  };

  const [currentTheme, setCurrentTheme] = useState(theme1);

  function getRows(count: number) {
    const rows = [];
    for (let i = 0; i < count; i++) {
      rows.push(
        <div className="position-relative overflow-hidden" key={i}>
          <Row alignItems="center" className="py-sm position-relative">
            <Icon name="square"></Icon>
            <Text className="m-left-sm m-right-md">Lorem ipsum</Text>
            <div className="p-right-md">
              <Text color="outline">Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur...</Text>
            </div>
            <Button startIcon="image" color="tertiary" variant="text" label="filename.jpg" size="sm" />
            <Row alignItems="center" gap="2xs" justifyContent="end" className="flex-grow">
              <IconButton icon="edit" variant="text" size="sm"></IconButton>
              <IconButton icon="trash" variant="text" size="sm"></IconButton>
              <IconButton icon="check" variant="text" size="sm"></IconButton>
            </Row>
            <StateLayer bgColor="onsurface" />
          </Row>
        </div>
      );
    }
    return rows;
  }

  return (
    <>
      <Row style={{ height: "100vh" }} gap="2xl" className="bg-surfacecontainer p-2xl overflow-hidden">
        <Column gap="lg">
          <IconButton icon="grid" fontClass="title3"></IconButton>
          <IconButton icon="database" fontClass="title3" variant="text"></IconButton>
          <IconButton icon="user" fontClass="title3" variant="text"></IconButton>
          <IconButton icon="settings" fontClass="title3" variant="text"></IconButton>
        </Column>
        <Column className="flex-grow overflow-hidden h-full" gap="lg">
          <Row justifyContent="space-between" alignItems="center" gap="md">
            <Heading tag="h1" fontClass="title2-bold">
              Manage Users
            </Heading>
            <Row alignItems="center" gap="md" justifyContent="end">
              <IconButton icon="x" color="errorcontainer"></IconButton>
              <IconButton icon="message-circle-warning" color="warningcontainer"></IconButton>
              <IconButton icon="check-circle" color="successcontainer"></IconButton>
            </Row>
          </Row>
          <Tabs
            tabLinks={["All Users", "Recently Added", "Inactive", "Pending Approval", "Banned"]}
            className="flex-grow"
            scrollableContent={true}
          >
            <Card scaleFactor="body">
              <Row alignItems="center" justifyContent="space-between" className="m-bottom-xs">
                <Row alignItems="center" gap="md">
                  <TextInput name="search" labelPosition="on-input" labelBackgroundColor="surface"></TextInput>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        startIcon="shield"
                        endIcon="chevron-down"
                        opticIconShift={false}
                        variant="outline"
                        label="All Roles"
                        color="secondary"
                      ></Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      cardProps={{ scaleFactor: "subheading", material: "glass", materialProps: { thickness: "thin" } }}
                    >
                      <MenuItem startIcon={{ name: "square-check" }}>Admin</MenuItem>
                      <MenuItem startIcon={{ name: "edit" }}>Contributor</MenuItem>
                      <MenuItem startIcon={{ name: "view" }}>Viewer</MenuItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        startIcon="calendar"
                        endIcon="chevron-down"
                        opticIconShift={false}
                        variant="outline"
                        label="All Join Dates"
                        color="secondary"
                      ></Button>
                    </DropdownTrigger>
                    <DropdownMenu cardProps={{ scaleFactor: "subheading" }}>
                      <MenuItem startIcon={{ name: "square-check" }}>Admin</MenuItem>
                      <MenuItem startIcon={{ name: "edit" }}>Contributor</MenuItem>
                      <MenuItem startIcon={{ name: "view" }}>Viewer</MenuItem>
                    </DropdownMenu>
                  </Dropdown>
                </Row>
                <Row justifyContent="end" gap="md">
            
                  <Button
                    startIcon="arrow-left-right"
                    color="primary"
                    label="Blue theme"
                    onClick={() => updateTheme(theme1)}
                  />
                  <Button
                    startIcon="arrow-left-right"
                    color="primary"
                    label="Yellow Theme"
                    onClick={() => updateTheme(theme2)}
                  />
                </Row>
              </Row>
              <Column>{getRows(25)}</Column>
            </Card>
            <Card scaleFactor="body"></Card>
            <Card scaleFactor="body"></Card>
            <Card scaleFactor="body"></Card>
            <Card scaleFactor="body"></Card>
          </Tabs>
        </Column>
      </Row>
    </>
  );
}
