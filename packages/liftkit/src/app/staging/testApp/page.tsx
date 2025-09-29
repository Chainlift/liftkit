"use client";
import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Icon from "@/registry/nextjs/components/icon";
import IconButton from "@/registry/nextjs/components/icon-button";
import Row from "@/registry/nextjs/components/row";
import Card from "@/registry/nextjs/components/card";
import Tabs from "@/registry/nextjs/components/tabs";
import TextInput from "@/registry/nextjs/components/text-input";
import { Dropdown, DropdownTrigger, DropdownMenu } from "@/registry/nextjs/components/dropdown";
import Button from "@/registry/nextjs/components/button";
import MenuItem from "@/registry/nextjs/components/menu-item";
import Text from "@/registry/nextjs/components/text";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/registry/nextjs/components/theme";
import ThemeController from "@/registry/nextjs/components/theme-controller";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/container";

export default function TestApp() {
  // const { palette, updateTheme } = useContext(ThemeContext);

  // const [paletteArray, setPaletteArray] = useState(
  //   Object.keys(palette).map((key) => {
  //     return { key, value: palette[key] };
  //   })
  // );

  // useEffect(() => {
  //   updateTheme(palette);
  //   const newPaletteArray = Object.keys(palette).map((key) => {
  //     return { key, value: palette[key] };
  //   });
  //   setPaletteArray(newPaletteArray);
  // }, [palette]);

  // const theme1 = {
  //   primary: "#035eff",
  //   secondary: "#badcff",
  //   tertiary: "#00ddfe",
  //   neutral: "#000000",
  //   neutralvariant: "#3f4f5b",
  //   error: "#dd305c",
  //   warning: "#feb600",
  //   success: "#0cfecd",
  //   info: "#175bfc",
  // };

  // const theme2 = {
  //   primary: "#f4af00",
  //   secondary: "#b15f00",
  //   tertiary: "#009fb8",
  //   neutral: "#837560",
  //   neutralvariant: "#d5c4ac",
  //   error: "#ba1a1a",
  //   warning: "#87521e",
  //   success: "#5d6300",
  //   info: "#006b54",
  // };

  // const theme3 = {
  //   primary: "#a92660",
  //   secondary: "#e7b4fd",
  //   tertiary: "#006d31",
  //   neutral: "#8a7177",
  //   neutralvariant: "#ddbfc6",
  //   error: "#ba1a1a",
  //   warning: "#8c4e2d",
  //   success: "#446900",
  //   info: "#006a63",
  // };

  function getRows(count: number) {
    const fullNames = [
      "Emma Thompson",
      "Liam Rodriguez",
      "Olivia Chen",
      "Noah Williams",
      "Ava Martinez",
      "Ethan Johnson",
      "Sophia Davis",
      "Mason Garcia",
      "Isabella Miller",
      "Logan Wilson",
      "Mia Anderson",
      "Lucas Taylor",
      "Charlotte Moore",
      "Benjamin Jackson",
      "Amelia White",
      "Oliver Harris",
      "Harper Martin",
      "Elijah Clark",
      "Evelyn Lewis",
      "James Robinson",
    ];
    const roles = ["Admin", "Contributor", "Viewer"];

    const rows = [];
    for (let i = 0; i < count; i++) {
      const fullName = fullNames[i % fullNames.length];
      const role = roles[i % roles.length];

      rows.push(
        <tr key={i} className="position-relative overflow-hidden">
          <td className="py-sm">
            <Icon name="square"></Icon>
          </td>
          <td className="py-sm">
            <Text>{fullName}</Text>
          </td>
          <td className="py-sm">
            <Text color="outline">{role}</Text>
          </td>
          <td className="py-sm">
            <Row alignItems="center" gap="xs" className="color-tertiary">
              <Icon color="tertiary" fontClass="body" name="image" />
              <p className="callout-bold">Filename.jpg</p>
            </Row>
          </td>
          <td className="py-sm">
            <Row alignItems="center" gap="2xs" justifyContent="end">
              <IconButton icon="edit" variant="text" size="sm" color="secondary"></IconButton>
              <IconButton icon="download" variant="text" size="sm"></IconButton>
              <IconButton icon="trash" color="error" variant="text" size="sm"></IconButton>
            </Row>
          </td>
        </tr>
      );
    }
    return rows;
  }

  return (
    <>
      {/* Render a set of color inputs, one for each color group. */}

      <ThemeController />
      <Section>
        <Container maxWidth="sm">
          {" "}
          <Row style={{ height: "100vh" }} gap="2xl" className="bg-surfacecontainer p-2xl pl-4xl overflow-hidden">
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
                  <IconButton icon="x" color="error" fontClass="title2"></IconButton>
                  <IconButton icon="message-circle-warning" color="warning" fontClass="title2"></IconButton>
                  <IconButton icon="check-circle" color="success" fontClass="title2"></IconButton>
                  <IconButton icon="help-circle" color="info" fontClass="title2"></IconButton>
                </Row>
              </Row>
              <Tabs
                tabLinks={["All Users", "Recently Added", "Inactive", "Pending Approval", "Banned"]}
                className="flex-grow"
                scrollableContent={true}
              >
                <Card scaleFactor="body" bgColor="surface">
                  <Row alignItems="center" justifyContent="space-between" className="mb-xs">
                    <Row alignItems="center" gap="md">
                      <TextInput name="search" labelPosition="on-input" labelBackgroundColor="surface"></TextInput>
                    </Row>
                    <Row justifyContent="end" gap="md">
                      <Dropdown>
                        <DropdownTrigger>
                          <Button
                            startIcon="palette"
                            endIcon="chevron-down"
                            opticIconShift={false}
                            variant="outline"
                            label="Themes"
                            color="tertiary"
                          ></Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          cardProps={{
                            scaleFactor: "subheading",
                            material: "glass",
                            materialProps: { thickness: "thin" },
                          }}
                        >
                          <MenuItem>Blueberry</MenuItem>
                          <MenuItem>Lemonbar</MenuItem>
                          <MenuItem>Watermelon</MenuItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Row>
                  </Row>
                  <Column>
                    <table>
                      <thead>
                        <tr>
                          <th>
                            <Icon name="square"></Icon>
                          </th>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Profile Photo</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>{getRows(25)}</tbody>
                    </table>
                  </Column>
                </Card>
                <Card scaleFactor="body"></Card>
                <Card scaleFactor="body"></Card>
                <Card scaleFactor="body"></Card>
                <Card scaleFactor="body"></Card>
              </Tabs>
            </Column>
          </Row>
        </Container>
      </Section>

      <style jsx>{`
        table {
          border-collapse: collapse;
        }
        th {
          text-align: left;
          font-size: var(--subheading-font-size);
          padding: var(--lk-size-sm) 0px;
          border-bottom: 1px solid black;
          font-weight: 500;
        }

        th:first-child {
          font-size: var(--body-font-size);
        }

        th:last-child {
          text-align: right;
        }

        thead tr {
          border-bottom: 1px solid black;
        }

        input[type="color"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: var(--lk-size-xl);
          height: var(--lk-size-xl);
          flex-basis: auto;
          flex: 0 0 auto;
          background-color: transparent;
          border: none;
          cursor: pointer;
          outline: 2px solid var(--lk-onsurface);
          border-radius: 100em;

          padding-block: 0px;
          padding-inline: 0px;

          &::-webkit-color-swatch-wrapper {
            padding: 0;
          }

          &::-webkit-color-swatch {
            border-radius: 100em;
            border: none;
          }
          &::-moz-color-swatch {
            border-radius: 100%;
            border: none;
          }
        }
      `}</style>
    </>
  );
}
