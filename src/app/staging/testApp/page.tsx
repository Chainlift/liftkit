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
import Switch from "@/registry/nextjs/components/switch";
import Grid from "@/registry/nextjs/components/grid";

type LkColorGroup =
  | "master"
  | "primary"
  | "secondary"
  | "tertiary"
  | "neutral"
  | "neutralvariant"
  | "error"
  | "warning"
  | "success"
  | "info";

export default function TestApp() {
  const { palette, setPalette, theme, updateTheme, updateThemeFromMaster, colorMode, setColorMode } =
    useContext(ThemeContext);

  const colorGroups: LkColorGroup[] = [
    "master",
    "primary",
    "secondary",
    "tertiary",
    "neutral",
    "neutralvariant",
    "error",
    "warning",
    "success",
    "info",
  ];

  const brandPalette: LkColorGroup[] = ["primary", "secondary", "tertiary"];

  const semanticPalette: LkColorGroup[] = ["error", "warning", "success", "info"];

  const layoutPalette: LkColorGroup[] = ["neutral", "neutralvariant"];

  const [paletteArray, setPaletteArray] = useState(
    Object.keys(palette).map((key) => {
      return { key, value: palette[key] };
    })
  );

  useEffect(() => {
    updateTheme(palette);
    const newPaletteArray = Object.keys(palette).map((key) => {
      return { key, value: palette[key] };
    });
    setPaletteArray(newPaletteArray);
  }, [palette]);

  const handleColorChange = (key: LkColorGroup, newValue: string) => {
    console.log(key);

    if (key === "master") {
      updateThemeFromMaster(newValue, setPalette);
    } else {
      setPalette((prevPalette) => ({
        ...prevPalette,
        [key]: newValue,
      }));
    }
  };

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
    primary: "#f4af00",
    secondary: "#b15f00",
    tertiary: "#009fb8",
    neutral: "#837560",
    neutralvariant: "#d5c4ac",
    error: "#ba1a1a",
    warning: "#87521e",
    success: "#5d6300",
    info: "#006b54",
  };

  const theme3 = {
    primary: "#a92660",
    secondary: "#e7b4fd",
    tertiary: "#006d31",
    neutral: "#8a7177",
    neutralvariant: "#ddbfc6",
    error: "#ba1a1a",
    warning: "#8c4e2d",
    success: "#446900",
    info: "#006a63",
  };

  const rubberDuck = {
    primary: "#f4af00",
    secondary: "#b15f00",
    tertiary: "#009fb8",
    neutral: "#837560",
    neutralvariant: "#d5c4ac",
    error: "#ba1a1a",
    warning: "#87521e",
    success: "#5d6300",
    info: "#006b54",
  };

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

  function handleColorModeSwitch() {
    if (colorMode === "dark") {
      setColorMode("light");
    } else {
      setColorMode("dark");
    }
  }

  const handleCopyPalette = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(palette, null, 2));
      alert("Code copied");
    } catch (err) {
      console.error("Failed to copy palette:", err);
    }
  };

  return (
    <>
      {/* Render a set of color inputs, one for each color group. */}
      <div className="p-2xl">
        <Card scaleFactor="heading" bgColor="surfacecontainerlowest" className="shadow-lg m-bottom-2xl">
          <Column gap="lg">
            <Grid columns={5} gap="md">
              <div>
                <h2 className="heading m-bottom-2xs">Globals</h2>
                <p className="subheading color-onsurfacevariant">
                  The "root" color of your theme. The color utilities will calculate all other color group swatches from
                  this one.
                </p>
              </div>
              <Row alignItems="start" gap="md">
                <input
                  type="color"
                  name="master"
                  value={palette["master"]}
                  onChange={(event) => handleColorChange("master", event.target.value)}
                ></input>
                <Column>
                  <label className="label m-bottom-xs" htmlFor={"master"}>
                    {"master"}
                  </label>
                  <p className="caption color-onsurfacevariant m-bottom-xs">
                    The seed color.{" "}
                    <strong className="color-error">If you edit this, all other color tokens will reset.</strong>
                  </p>
                </Column>
              </Row>
              <Row alignItems="start" gap="md">
                <Column>
                  <Switch onClick={handleColorModeSwitch} value={colorMode === "dark" ? true : false}></Switch>
                </Column>
                <Column>
                  <label className="label m-bottom-xs">Default to Dark Mode</label>
                  <p className="caption color-onsurfacevariant m-bottom-xs">Toggles dark mode.</p>
                </Column>
              </Row>
            </Grid>
            <Grid columns={5}>
              <div>
                <h2 className="heading m-bottom-2xs">Brand palette </h2>
                <p className="subheading color-onsurfacevariant m-bottom-md">The key colors of your brand.</p>
              </div>
              {brandPalette.map((colorGroup) => (
                <Row key={colorGroup} alignItems="start" gap="md">
                  <input
                    type="color"
                    name={colorGroup}
                    value={palette[colorGroup]}
                    onChange={(event) => handleColorChange(colorGroup, event.target.value)}
                  ></input>
                  <Column>
                    <label className="label m-bottom-xs" htmlFor={colorGroup}>
                      {colorGroup}
                    </label>
                    <p className="caption color-onsurfacevariant m-bottom-xs">
                      {colorGroup === "primary"
                        ? "Main brand color, used for most UI elements."
                        : colorGroup === "secondary"
                          ? "Desaturated variant of primary."
                          : colorGroup === "tertiary"
                            ? "Your accent color. Defaults to complementary hue to primary."
                            : null}
                    </p>
                  </Column>
                </Row>
              ))}
            </Grid>
            <Grid columns={5}>
              <div>
                <h2 className="heading m-bottom-2xs">Semantic Palette</h2>
                <p className="subheading color-onsurfacevariant m-bottom-md">Colors for communicating with the user.</p>
              </div>
              {semanticPalette.map((colorGroup) => (
                <Row key={colorGroup} alignItems="start" gap="md">
                  <input
                    type="color"
                    name={colorGroup}
                    value={palette[colorGroup]}
                    onChange={(event) => handleColorChange(colorGroup, event.target.value)}
                  ></input>
                  <Column>
                    <label className="label m-bottom-xs" htmlFor={colorGroup}>
                      {colorGroup}
                    </label>
                    <p className="caption color-onsurfacevariant m-bottom-xs">
                      {colorGroup === "error"
                        ? "A pink or red, indicating problems."
                        : colorGroup === "warning"
                          ? "An orange or yellow, indicating caution."
                          : colorGroup === "success"
                            ? "A green, indicating success."
                            : colorGroup === "info"
                              ? "A blue, indicating neutral information."
                              : null}
                    </p>
                  </Column>
                </Row>
              ))}
            </Grid>
            <Grid columns={5}>
              <div>
                <h2 className="heading m-bottom-2xs">Layout Palette</h2>
                <p className="subheading color-onsurfacevariant m-bottom-md">
                  Backgrounds, surfaces, default text colors, and outlines.
                </p>
              </div>
              {layoutPalette.map((colorGroup) => (
                <Row key={colorGroup} alignItems="start" gap="md">
                  <input
                    type="color"
                    name={colorGroup}
                    value={palette[colorGroup]}
                    onChange={(event) => handleColorChange(colorGroup, event.target.value)}
                  ></input>
                  <Column>
                    <label className="label m-bottom-xs" htmlFor={colorGroup}>
                      {colorGroup}
                    </label>
                    <p className="caption color-onsurfacevariant m-bottom-xs">
                      {colorGroup === "neutral"
                        ? "Backgrounds, surfaces, outlines, and default text color"
                        : colorGroup === "neutralvariant"
                          ? "Surface variant, outline variant, and text color variant"
                          : null}
                    </p>
                  </Column>
                </Row>
              ))}
            </Grid>
          </Column>
          <Card bgColor="surfacevariant" scaleFactor="body" className="position-relative">
            <pre>
    {`
const [colorMode, setColorMode] = useState<"light" | "dark">("${colorMode}");

const [palette, setPalette] = useState<PaletteState>(${JSON.stringify(palette, null, 2)}
`}
            </pre>
            <IconButton
              icon="copy"
              style={{ position: "absolute", inset: "1em 1em auto auto" }}
              onClick={handleCopyPalette}
            ></IconButton>
          </Card>
        </Card>
      </div>
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
              <Row alignItems="center" justifyContent="space-between" className="m-bottom-xs">
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
                      cardProps={{ scaleFactor: "subheading", material: "glass", materialProps: { thickness: "thin" } }}
                    >
                      <MenuItem onClick={() => updateTheme(theme1)}>Blueberry</MenuItem>
                      <MenuItem onClick={() => updateTheme(theme2)}>Lemonbar</MenuItem>
                      <MenuItem onClick={() => updateTheme(theme3)}>Watermelon</MenuItem>
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
