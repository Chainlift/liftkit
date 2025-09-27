import * as React from "react";
import { Tabs } from "radix-ui";
import "./styles.css";

const TabsDemo = () => (
	<Tabs.Root className="TabsRoot" defaultValue="tab1">
		<Tabs.List className="TabsList" aria-label="Manage your account">
			<Tabs.Trigger className="TabsTrigger" value="tab1">
				Account
			</Tabs.Trigger>
			<Tabs.Trigger className="TabsTrigger" value="tab2">
				Password
			</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content className="TabsContent" value="tab1">
			<p className="Text">
				Make changes to your account here. Click save when you're done.
			</p>
			<fieldset className="Fieldset">
				<label className="Label" htmlFor="name">
					Name
				</label>
				<input className="Input" id="name" defaultValue="Pedro Duarte" />
			</fieldset>
			<fieldset className="Fieldset">
				<label className="Label" htmlFor="username">
					Username
				</label>
				<input className="Input" id="username" defaultValue="@peduarte" />
			</fieldset>
			<div
				style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
			>
				<button className="Button green">Save changes</button>
			</div>
		</Tabs.Content>
		<Tabs.Content className="TabsContent" value="tab2">
			<p className="Text">
				Change your password here. After saving, you'll be logged out.
			</p>
			<fieldset className="Fieldset">
				<label className="Label" htmlFor="currentPassword">
					Current password
				</label>
				<input className="Input" id="currentPassword" type="password" />
			</fieldset>
			<fieldset className="Fieldset">
				<label className="Label" htmlFor="newPassword">
					New password
				</label>
				<input className="Input" id="newPassword" type="password" />
			</fieldset>
			<fieldset className="Fieldset">
				<label className="Label" htmlFor="confirmPassword">
					Confirm password
				</label>
				<input className="Input" id="confirmPassword" type="password" />
			</fieldset>
			<div
				style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
			>
				<button className="Button green">Change password</button>
			</div>
		</Tabs.Content>
	</Tabs.Root>
);

export default TabsDemo;
