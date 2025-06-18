import Column from "@/registry/nextjs/components/column";
import Heading from "@/registry/nextjs/components/heading";
import Icon from "@/registry/nextjs/components/icon";
import IconButton from "@/registry/nextjs/components/icon-button";
import NavBar from "@/registry/nextjs/components/navbar";
import Row from "@/registry/nextjs/components/row";
import Card from "@/registry/nextjs/components/card";
import Tabs from "@/registry/nextjs/components/tabs";
import TextInput from "@/registry/nextjs/components/text-input";

export default function TestApp() {
  return (
    <>
      <Row style={{ height: "100vh" }} gap="md" className="bg-surfacecontainer">
        <Column>
          <IconButton icon="grid"></IconButton>
          <IconButton icon="database"></IconButton>
          <IconButton icon="user"></IconButton>
          <IconButton icon="settings"></IconButton>
        </Column>
        <Column className="flex-grow">
          <Row justifyContent="space-between" alignItems="center" gap="md">
            <Heading tag="h1" fontClass="title2-bold">
              Manage Users
            </Heading>
            <Row alignItems="center" gap="md" justifyContent="end" >
              <IconButton icon="x" color="errorcontainer"></IconButton>
              <IconButton icon="message-circle-warning" color="warningcontainer"></IconButton>
              <IconButton icon="check-circle" color="successcontainer"></IconButton>
            </Row>
          </Row>
          <Tabs tabLinks={["All Users", "Recently Added", "Inactive", "Pending Approval", "Banned"]}>
            <Card scaleFactor="body">
              <Row alignItems="center" gap="md">
                <TextInput name="search" labelPosition="on-input"></TextInput>
              </Row>
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
