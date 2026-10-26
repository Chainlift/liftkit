"use client";

import { useState, type ReactNode } from "react";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  Field,
  FieldControl,
  FieldLabel,
  GoldenBox,
  Icon,
  IconButton,
  Input,
  Menu,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuSeparator,
  MenuTrigger,
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue,
  Select,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  StateLayer,
  Switch,
  SwitchThumb,
  Tabs,
  TabsIndicator,
  TabsList,
  TabsPanel,
  TabsTab,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@chainlift/liftkit";
import ToastDemo from "@/content/components/toast/demo";
import "./component-mosaic-v2.css";

type IconName = React.ComponentProps<typeof Icon>["name"];

// ─── Building blocks ────────────────────────────────────

/** A card with an optional title, description, and corner action. */
function MosaicCard({
  title,
  description,
  action,
  color,
  children,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  color?: LkColorWithOnToken;
  children: ReactNode;
}) {
  return (
    <Card className="shadow-xs" scaleFactor="body" color={color}>
      {title && (
        <div className="flex items-start justify-between gap-md mb-md">
          <div>
            <h3 className="heading-bold">{title}</h3>
            {description && (
              <p className={`subheading mt-2xs${color ? "" : " color-onsurfacevariant"}`}>{description}</p>
            )}
          </div>
          {action}
        </div>
      )}
      {children}
    </Card>
  );
}

/** A labeled group of navigation rows. */
function NavGroup({ label, items, activeIndex }: { label: string; items: [IconName, string][]; activeIndex?: number }) {
  return (
    <div>
      <div className="capline color-onsurfacevariant px-sm mb-2xs">{label}</div>
      <nav className="flex-v">
        {items.map(([icon, text], index) => (
          <a
            key={text}
            href="#"
            onClick={(event) => event.preventDefault()}
            aria-current={index === activeIndex ? "page" : undefined}
            className={`flex items-center gap-sm px-sm py-xs rounded-xs relative overflow-hidden color-onsurface${
              index === activeIndex ? " bg-surfacecontainerhigh font-500" : ""
            }`}
          >
            <Icon name={icon} aria-hidden="true" />
            <span className="callout">{text}</span>
            <StateLayer />
          </a>
        ))}
      </nav>
    </div>
  );
}

/** A small label/value tile. */
function StatTile({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="fill-container bg-surfacecontainerlow rounded-xs">
      <GoldenBox scaleFactor="body" opticalCorrection="y">
        <div className="capline color-onsurfacevariant mb-2xs">{label}</div>
        <div className="heading-bold">{value}</div>
        <div className="subheading color-onsurfacevariant">{note}</div>
      </GoldenBox>
    </div>
  );
}

function LabeledRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-md callout${bold ? " font-500" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Check() {
  return (
    <CheckboxIndicator>
      <Icon name="check" aria-hidden="true" />
    </CheckboxIndicator>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem>
      <AccordionTrigger>
        <GoldenBox scaleFactor="body" opticalCorrection="all">
          <span className="body font-500">{question}</span>
        </GoldenBox>
        <StateLayer />
      </AccordionTrigger>
      <AccordionContent className="p-0">
        <GoldenBox scaleFactor="body" noPadding="top">
          {answer}
        </GoldenBox>
      </AccordionContent>
    </AccordionItem>
  );
}

// ─── Cards ──────────────────────────────────────────────

function QuickActions() {
  return (
    <MosaicCard>
      <div className="flex items-center gap-sm mb-md">
        <Button startIcon="plus">New project</Button>
        <Button variant="outline">Invite</Button>
        <IconButton iconName="bell" variant="text" aria-label="Notifications" />
      </div>
      {/* Wrapped because Input sets its own margin, which would win over a utility class */}
      <div className="mb-md">
        <Input placeholder="Search projects" aria-label="Search projects" />
      </div>
      <div className="flex items-center justify-between gap-md mb-lg">
        <label className="flex items-center gap-sm callout">
          <Switch defaultChecked>
            <SwitchThumb />
          </Switch>
          Email alerts
        </label>
        <label className="flex items-center gap-sm callout">
          <Checkbox defaultChecked>
            <Check />
          </Checkbox>
          Weekly digest
        </label>
      </div>
      <div className="flex items-center gap-sm flex-wrap">
        <Menu>
          <MenuTrigger>
            Export <Icon name="chevron-down" aria-hidden="true" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuPopup>
                <MenuItem>Download CSV</MenuItem>
                <MenuItem>Download PDF</MenuItem>
                <MenuSeparator />
                <MenuItem>Copy share link</MenuItem>
              </MenuPopup>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
        <ToastDemo />
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="outline" color="error" />}>Delete workspace</AlertDialogTrigger>
          <AlertDialogContent render={<Card scaleFactor="title3" opticalCorrection="top" />}>
            <AlertDialogHeader>
              <AlertDialogTitle className="title3-bold mb-2xs">Delete this workspace?</AlertDialogTitle>
              <AlertDialogDescription className="body mb-sm">
                All projects and members are removed. This can&apos;t be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <div className="flex items-center justify-end gap-sm">
                <AlertDialogClose render={<Button label="Cancel" color="error" variant="outline" />}>
                  Cancel
                </AlertDialogClose>
                <AlertDialogAction>Delete</AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </MosaicCard>
  );
}

function WorkspaceNav() {
  return (
    <MosaicCard>
      <div className="flex-v gap-lg">
        <NavGroup
          label="Planning"
          activeIndex={2}
          items={[
            ["file-text", "Documents"],
            ["wallet", "Budget"],
            ["chart-column", "Reports"],
            ["target", "Goals"],
            ["calendar", "Calendar"],
          ]}
        />
        <NavGroup
          label="Support"
          items={[
            ["circle-question-mark", "Help center"],
            ["book-open", "Docs"],
            ["message-circle", "Contact us"],
            ["globe", "Community"],
          ]}
        />
      </div>
    </MosaicCard>
  );
}

function UsageCard() {
  return (
    <MosaicCard title="Usage this month" description="Resets on the 1st">
      <div className="flex-v gap-md mb-lg">
        {[
          ["Storage", 64],
          ["API calls", 38],
          ["Seats", 90],
        ].map(([label, value]) => (
          <Meter key={label} value={value as number}>
            <MeterLabel>{label}</MeterLabel>
            <MeterValue />
            <MeterTrack>
              <MeterIndicator />
            </MeterTrack>
          </Meter>
        ))}
      </div>
      <div className="flex gap-sm mb-md">
        <StatTile label="Upcoming" value="May 2026" note="Scheduled" />
        <StatTile label="Plan" value="Growth" note="Billed yearly" />
      </div>
      <Button className="w-full">View full report</Button>
    </MosaicCard>
  );
}

function BalanceCard() {
  return (
    <MosaicCard color="primarycontainer">
      <div className="subheading mb-2xs">Claimable balance</div>
      <div className="display2-bold mb-xs">$1,211.29</div>
      <div className="flex items-center gap-2xs callout mb-lg">
        <Icon name="clock" aria-hidden="true" />
        Pending setup
      </div>
      <div className="flex-v gap-xs mb-md">
        <LabeledRow label="Net royalties" value="$1,248.75" />
        <LabeledRow label="Processing fee" value="-$37.46" />
      </div>
      <Separator className="mb-md" />
      <LabeledRow label="Total ready to claim" value="$1,211.29 USD" bold />
      <p className="caption mt-md">
        Once your bank is connected, balances over $10.00 are automatically eligible for monthly distribution.
      </p>
    </MosaicCard>
  );
}

function MilestoneCard() {
  return (
    <MosaicCard title="Set a new milestone" description="Define your target and we'll help you pace your savings.">
      <div className="flex-v gap-md mb-lg">
        <Field>
          <FieldLabel>Goal name</FieldLabel>
          <FieldControl placeholder="e.g. New car, home down payment" />
        </Field>
        <div className="flex gap-sm">
          <Field className="fill-container">
            <FieldLabel>Target amount</FieldLabel>
            <FieldControl defaultValue="$15,000" />
          </Field>
          <Field className="fill-container">
            <FieldLabel>Target date</FieldLabel>
            <FieldControl defaultValue="Dec 2026" />
          </Field>
        </div>
      </div>
      <div className="flex-v gap-sm">
        <Button className="w-full">Create goal</Button>
        <Button className="w-full" variant="outline">
          Cancel
        </Button>
      </div>
    </MosaicCard>
  );
}

const CURRENCIES = [
  { label: "USD, United States dollar", value: "usd" },
  { label: "EUR, Euro", value: "eur" },
  { label: "GBP, British pound", value: "gbp" },
];

function PayoutCard() {
  const [minimum, setMinimum] = useState(2500);
  return (
    <MosaicCard
      title="Payout threshold"
      description="Set the minimum balance required before a payout is triggered."
      action={<IconButton iconName="x" variant="text" aria-label="Close" />}
    >
      <div className="flex-v gap-lg">
        <Field>
          <FieldLabel nativeLabel={false} render={<div />}>
            Preferred currency
          </FieldLabel>
          <Select items={CURRENCIES} defaultValue="usd">
            <SelectTrigger className="w-full">
              <SelectValue />
              <SelectIcon>
                <Icon name="chevron-down" aria-hidden="true" />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
              <SelectPositioner sideOffset={8}>
                <SelectPopup>
                  <SelectList>
                    {CURRENCIES.map((currency) => (
                      <SelectItem key={currency.value} value={currency.value}>
                        <SelectItemIndicator>
                          <Icon name="check" aria-hidden="true" />
                        </SelectItemIndicator>
                        <SelectItemText>{currency.label}</SelectItemText>
                      </SelectItem>
                    ))}
                  </SelectList>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </Select>
        </Field>

        <div>
          <div className="flex items-end justify-between gap-md">
            <span className="callout font-500">Minimum payout</span>
            <span className="title2-bold">${minimum.toLocaleString()}</span>
          </div>
          <Slider
            min={50}
            max={10000}
            step={50}
            value={minimum}
            onValueChange={(next) => setMinimum(Array.isArray(next) ? next[0] : next)}
          >
            <SliderControl>
              <SliderTrack>
                <SliderIndicator />
                <SliderThumb aria-label="Minimum payout" />
              </SliderTrack>
            </SliderControl>
          </Slider>
          <div className="flex items-center justify-between caption color-onsurfacevariant">
            <span>$50 MIN</span>
            <span>$10,000 MAX</span>
          </div>
        </div>

        <CheckboxGroup aria-label="Notify me by" defaultValue={["email"]} className="flex flex-col gap-sm">
          <div className="capline color-onsurfacevariant">Notify me by</div>
          <label className="flex items-center gap-sm callout">
            <Checkbox name="notify" value="email">
              <Check />
            </Checkbox>
            Email
          </label>
          <label className="flex items-center gap-sm callout">
            <Checkbox name="notify" value="sms">
              <Check />
            </Checkbox>
            Text message
          </label>
        </CheckboxGroup>

        <label className="flex items-center justify-between gap-md callout">
          Pay out automatically
          <Switch defaultChecked>
            <SwitchThumb />
          </Switch>
        </label>
      </div>
    </MosaicCard>
  );
}

const TEAM = [
  ["Garrett Mack", "Owner", "GM"],
  ["Priya Nair", "Designer", "PN"],
  ["Tomas Reyes", "Engineer", "TR"],
];

function TeamCard() {
  return (
    <MosaicCard
      title="Team"
      description="3 members, 2 pending invites"
      action={
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger render={<IconButton iconName="user-plus" variant="outline" aria-label="Add member" />} />
            <TooltipContent>Add member</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
    >
      <Tabs defaultValue="members">
        <TabsList>
          <TabsTab value="members">Members</TabsTab>
          <TabsTab value="invites">Invites</TabsTab>
          <TabsIndicator />
        </TabsList>
        <TabsPanel value="members" className="w-full">
          <div className="flex-v w-full pt-sm">
            {TEAM.map(([name, role, initials]) => (
              <div key={name} className="flex items-center gap-md py-xs">
                <Avatar>
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="fill-container">
                  <div className="callout font-500">{name}</div>
                  <div className="subheading color-onsurfacevariant">{role}</div>
                </div>
                <Menu>
                  <MenuTrigger render={<IconButton iconName="ellipsis" variant="text" aria-label={`Actions for ${name}`} />} />
                  <MenuPortal>
                    <MenuPositioner sideOffset={8}>
                      <MenuPopup>
                        <MenuItem>Change role</MenuItem>
                        <MenuItem>Send message</MenuItem>
                        <MenuSeparator />
                        <MenuItem>Remove</MenuItem>
                      </MenuPopup>
                    </MenuPositioner>
                  </MenuPortal>
                </Menu>
              </div>
            ))}
          </div>
        </TabsPanel>
        <TabsPanel value="invites" className="w-full">
          <div className="flex-v w-full pt-sm">
            {["sam@studio.co", "lena@studio.co"].map((email) => (
              <div key={email} className="flex items-center justify-between gap-md py-xs">
                <span className="callout">{email}</span>
                <Button variant="text">Resend</Button>
              </div>
            ))}
          </div>
        </TabsPanel>
      </Tabs>
    </MosaicCard>
  );
}

function HelpCard() {
  return (
    <MosaicCard title="Help center">
      <Accordion>
        <FaqItem question="How do I get started?" answer="Create a project, invite your team, and connect a bank account." />
        <FaqItem question="When do payouts happen?" answer="Balances over your threshold are paid out on the 1st of each month." />
        <FaqItem question="Can I change my plan?" answer="Yes. Upgrade or downgrade any time from Billing settings." />
      </Accordion>
    </MosaicCard>
  );
}

function AssistantCard() {
  return (
    <MosaicCard
      title="Assistant"
      description="How can I help you today?"
      action={<IconButton iconName="rotate-cw" variant="outline" aria-label="Start over" />}
    >
      <Separator className="mb-lg" />
      <div className="flex-v items-center text-align-center gap-xs mb-lg">
        <div className="bg-surfacecontainerhigh rounded-xs p-sm flex">
          <Icon name="sparkles" aria-hidden="true" />
        </div>
        <h4 className="heading-bold">Morning, Garrett!</h4>
        <p className="callout color-onsurfacevariant">
          What are we working on today? Send a message to start a new conversation.
        </p>
      </div>
      <div className="flex items-center gap-sm">
        <div className="fill-container">
          <Input placeholder="Message the assistant" aria-label="Message the assistant" />
        </div>
        <IconButton iconName="send" aria-label="Send" />
      </div>
    </MosaicCard>
  );
}

/**
 * A showcase of LiftKit components arranged as things you'd actually ship: a nav, a usage panel, forms, a team list,
 * a chat. Cards flow into balanced columns that collapse as the space narrows.
 */
export function ComponentMosaicV2() {
  return (
    <div className="mosaic-v2">
      <QuickActions />
      <WorkspaceNav />
      <UsageCard />
      <BalanceCard />
      <MilestoneCard />
      <PayoutCard />
      <TeamCard />
      <HelpCard />
      <AssistantCard />
    </div>
  );
}
