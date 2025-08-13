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
import ThemeController from "@/registry/nextjs/components/theme-controller";
import Section from "@/registry/nextjs/components/section";
import Container from "@/registry/nextjs/components/container";

export default function TestApp() {
 
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
            <Row className="items-center gap-xs">
              <Icon color="tertiary" fontClass="body" name="image" />
              <p className="callout-bold">Filename.jpg</p>
            </Row>
          </td>
          <td className="py-sm">
            <Row alignItems="center" gap="2xs" justifyContent="end">
              <IconButton icon="edit" variant="text" size="sm" color="secondary"></IconButton>
              <IconButton icon="download" variant="outline" size="sm"></IconButton>
              <IconButton icon="trash" variant="text" color="error"  size="sm"></IconButton>
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
        <Container>
          <Row className="bg-surfacecontainer p-2xl pl-4xl gap-2xl overflow-hidden">
            <Column className="gap-lg">
              <IconButton icon="grid" className="title3"></IconButton>
              <IconButton icon="database" className="title3" variant="text"></IconButton>
              <IconButton icon="user" className="title3" variant="text"></IconButton>
              <IconButton icon="settings" className="title3" variant="text"></IconButton>
            </Column>
            <Column className="flex-grow overflow-hidden h-full gap-lg">
              <Row className="justify-between items-center gap-md">
                <Heading tag="h1" className="title2-bold">
                  Manage Users
                </Heading>
                <Row className="items-center gap-md justify-end">
                  <IconButton icon="x" color="error" className="title2"></IconButton>
                  <IconButton icon="message-circle-warning" color="warning" className="title2"></IconButton>
                  <IconButton icon="check-circle" color="success" className="title2"></IconButton>
                  <IconButton icon="help-circle" color="info" className="title2"></IconButton>
                </Row>
              </Row>
              <Tabs
                tabLinks={["All Users", "Recently Added", "Inactive", "Pending Approval", "Banned"]}
                className="flex-grow"
                scrollableContent={true}
              >
                <Card scaleFactor="body" bgColor="surface">
                  <Row className="mb-xs items-center justify-between">
                    <Row className="items-center gap-md">
                      <TextInput name="search" labelPosition="on-input" labelBackgroundColor="surface" className="pr-xl"></TextInput>
                    </Row>
                    <Row className="justify-md gap-md">
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

       
      `}</style>
    </>
  );
}
