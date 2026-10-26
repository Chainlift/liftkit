"use client";

import { useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
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
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
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
  Toast,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toggle,
  ToggleGroup,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useToastManager,
} from "@chainlift/liftkit";
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

function LabeledRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-md callout${bold ? " font-500" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

/** Container colors that tiles and avatars cycle through, each with the text color made for it. */
const CONTAINER_COLORS = [
  "bg-primarycontainer color-onprimarycontainer",
  "bg-secondarycontainer color-onsecondarycontainer",
  "bg-tertiarycontainer color-ontertiarycontainer",
  "bg-successcontainer color-onsuccesscontainer",
  "bg-warningcontainer color-onwarningcontainer",
  "bg-errorcontainer color-onerrorcontainer",
  "bg-infocontainer color-oninfocontainer",
];

/** The container color classes for the nth tile or avatar in a list. */
const containerColor = (index: number) => CONTAINER_COLORS[index % CONTAINER_COLORS.length];

/** A rounded tile holding an icon. */
function IconTile({ name, className = "bg-surfacecontainerhigh" }: { name: IconName; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-xs p-xs flex-none ${className}`}>
      <Icon name={name} aria-hidden="true" />
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

// ─── Dashboard header ───────────────────────────────────

function AnnounceButton() {
  const toasts = useToastManager();
  return (
    <Button
      startIcon="megaphone"
      onClick={() =>
        toasts.add({
          title: "Announcement sent",
          description: "Guests in the app and on the PA system were notified.",
        })
      }
    >
      Send announcement
    </Button>
  );
}

function ToastList() {
  const { toasts } = useToastManager();
  return toasts.map((toast) => (
    <Toast key={toast.id} toast={toast}>
      <ToastContent>
        <ToastTitle />
        <ToastDescription />
        <ToastClose aria-label="Close">
          <Icon name="x" aria-hidden="true" />
        </ToastClose>
      </ToastContent>
    </Toast>
  ));
}

function ParkHeader() {
  const [range, setRange] = useState("today");
  return (
    <div className="flex items-center justify-between gap-lg flex-wrap mb-lg">
      <div className="flex items-center gap-md">
        <IconTile name="ferris-wheel" className="bg-primarycontainer color-onprimarycontainer" />
        <div>
          <h2 className="title2-bold">Wildwood Adventure Park</h2>
          <p className="subheading color-onsurfacevariant">Saturday, June 14 · Open 9 AM to 9 PM</p>
        </div>
      </div>
      <div className="flex items-center gap-md flex-wrap">
        <ToggleGroup
          aria-label="Time range"
          value={[range]}
          onValueChange={(next) => {
            if (next[0]) setRange(next[0]);
          }}
        >
          <Toggle value="today" className="w-max px-sm">Today</Toggle>
          <Toggle value="week" className="w-max px-sm">Week</Toggle>
          <Toggle value="season" className="w-max px-sm">Season</Toggle>
        </ToggleGroup>
        <ToastProvider>
          <AnnounceButton />
          <ToastPortal>
            <ToastViewport>
              <ToastList />
            </ToastViewport>
          </ToastPortal>
        </ToastProvider>
      </div>
    </div>
  );
}

// ─── Cards ──────────────────────────────────────────────

function TodayCard() {
  return (
    <MosaicCard color="primarycontainer">
      <div className="subheading mb-2xs">Guests in the park</div>
      <div className="display2-bold mb-xs">18,420</div>
      <div className="flex items-center gap-2xs callout mb-lg">
        <Icon name="trending-up" aria-hidden="true" />
        12% above last Saturday
      </div>
      <Meter value={74} className="mb-lg">
        <MeterLabel>Park capacity</MeterLabel>
        <MeterValue />
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </Meter>
      <div className="flex-v gap-xs">
        <LabeledRow label="Day passes" value="11,240" />
        <LabeledRow label="Season pass entries" value="5,310" />
        <LabeledRow label="Group bookings" value="1,870" />
      </div>
      <Separator className="my-md" />
      <p className="caption">Capacity cap is 25,000 guests. Gates pause entry at 95%.</p>
    </MosaicCard>
  );
}

function CommandCard() {
  return (
    <MosaicCard title="Command center">
      <div className="mb-md">
        <Input placeholder="Search rides, staff, guests" aria-label="Search rides, staff, and guests" />
      </div>
      <div className="flex items-center gap-sm flex-wrap mb-md">
        <Button startIcon="shield-alert">Log incident</Button>
        <Button variant="outline" startIcon="bell-ring">
          Page staff
        </Button>
        <Menu>
          <MenuTrigger>
            Reports <Icon name="chevron-down" aria-hidden="true" />
          </MenuTrigger>
          <MenuPortal>
            <MenuPositioner sideOffset={8}>
              <MenuPopup>
                <MenuItem>Daily attendance</MenuItem>
                <MenuItem>Ride downtime</MenuItem>
                <MenuItem>Revenue summary</MenuItem>
                <MenuSeparator />
                <MenuItem>Schedule a report</MenuItem>
              </MenuPopup>
            </MenuPositioner>
          </MenuPortal>
        </Menu>
      </div>
      <Separator className="mb-md" />
      <div className="flex items-center justify-between gap-md">
        <span className="callout color-onsurfacevariant">Emergencies only</span>
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="outline" color="error" />}>Close the park</AlertDialogTrigger>
          <AlertDialogContent render={<Card scaleFactor="title3" opticalCorrection="top" />}>
            <AlertDialogHeader>
              <AlertDialogTitle className="title3-bold mb-2xs">Close the park now?</AlertDialogTitle>
              <AlertDialogDescription className="body mb-sm">
                Every ride stops and guests are told to head to the exits.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <div className="flex items-center justify-end gap-sm">
                <AlertDialogClose render={<Button label="Cancel" color="error" variant="outline" />}>
                  Cancel
                </AlertDialogClose>
                <AlertDialogAction>Close the park</AlertDialogAction>
              </div>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </MosaicCard>
  );
}

function ParkMapCard() {
  return (
    <MosaicCard>
      <div className="flex-v gap-lg">
        <NavGroup
          label="Zones"
          activeIndex={1}
          items={[
            ["waves", "Adventure Bay"],
            ["castle", "Skyline Plaza"],
            ["baby", "Kids' Cove"],
            ["tent", "Lantern Gardens"],
          ]}
        />
        <NavGroup
          label="Guest services"
          items={[
            ["life-buoy", "First aid"],
            ["map-pin", "Lost and found"],
            ["utensils", "Restaurants"],
            ["car-front", "Parking"],
          ]}
        />
      </div>
    </MosaicCard>
  );
}

const RIDES: { name: string; zone: string; icon: IconName; wait: number; open: boolean; note?: string }[] = [
  { name: "Thunder Loop", zone: "Skyline Plaza", icon: "roller-coaster", wait: 45, open: true },
  { name: "Lantern River Rapids", zone: "Adventure Bay", icon: "waves", wait: 25, open: true },
  { name: "Skyfall Tower", zone: "Skyline Plaza", icon: "castle", wait: 0, open: false, note: "Brake inspection" },
  { name: "Sunrise Carousel", zone: "Kids' Cove", icon: "tent", wait: 5, open: true },
  { name: "Gravity Drift", zone: "Lantern Gardens", icon: "ferris-wheel", wait: 60, open: true },
];

function RideStatusCard() {
  const [open, setOpen] = useState(RIDES.map((ride) => ride.open));
  const openCount = open.filter(Boolean).length;
  return (
    <MosaicCard title="Ride status" description={`${openCount} of ${RIDES.length} rides open`}>
      <TooltipProvider>
        <div className="flex-v gap-md">
          {RIDES.map((ride, index) => (
            <div key={ride.name} className="flex items-center gap-md">
              <IconTile name={ride.icon} className={containerColor(index)} />
              <div className="fill-container">
                <div className="callout font-500">{ride.name}</div>
                <div className="subheading color-onsurfacevariant">{ride.zone}</div>
              </div>
              <div className="text-align-center">
                <div className="heading-bold">{open[index] ? ride.wait : "-"}</div>
                <div className="caption color-onsurfacevariant">min</div>
              </div>
              <Tooltip>
                {/* The trigger is a plain wrapper: using the Switch as the trigger would overwrite its data-slot and unstyle it */}
                <TooltipTrigger render={<span className="flex" />}>
                  <Switch
                    aria-label={`${ride.name} is open`}
                    checked={open[index]}
                    onCheckedChange={(checked) =>
                      setOpen((current) => current.map((value, i) => (i === index ? checked : value)))
                    }
                  >
                    <SwitchThumb />
                  </Switch>
                </TooltipTrigger>
                <TooltipContent>{open[index] ? "Open to guests" : (ride.note ?? "Closed")}</TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
      </TooltipProvider>
    </MosaicCard>
  );
}

function CrowdingCard() {
  return (
    <MosaicCard title="Zone crowding" description="Share of each zone's capacity in use">
      <div className="flex-v gap-md mb-md">
        {[
          ["Skyline Plaza", 88],
          ["Adventure Bay", 62],
          ["Lantern Gardens", 47],
          ["Kids' Cove", 35],
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
      <div className="flex items-center gap-xs callout color-onsurfacevariant mb-md">
        <Icon name="users" aria-hidden="true" />
        Skyline Plaza is nearing capacity
      </div>
      <Button className="w-full" variant="outline">
        Open crowd map
      </Button>
    </MosaicCard>
  );
}

function WeatherCard() {
  const [miles, setMiles] = useState(10);
  return (
    <MosaicCard color="warningcontainer">
      <div className="flex items-start gap-md mb-md">
        <IconTile name="cloud-lightning" className="bg-warning color-onwarning" />
        <div>
          <h3 className="heading-bold">Storm watch</h3>
          <p className="callout">Lightning detected 12 miles west. Outdoor rides may pause around 5:40 PM.</p>
        </div>
      </div>
      <div className="mb-md">
        <div className="flex items-end justify-between gap-md">
          <span className="callout font-500">Pause when lightning is within</span>
          <span className="title3-bold flex-none">{miles} mi</span>
        </div>
        <Slider
          min={5}
          max={30}
          step={1}
          value={miles}
          onValueChange={(next) => setMiles(Array.isArray(next) ? next[0] : next)}
        >
          <SliderControl>
            <SliderTrack>
              <SliderIndicator />
              <SliderThumb aria-label="Pause rides when lightning is within (miles)" />
            </SliderTrack>
          </SliderControl>
        </Slider>
      </div>
      <label className="flex items-center justify-between gap-md callout">
        Pause outdoor rides automatically
        <Switch defaultChecked>
          <SwitchThumb />
        </Switch>
      </label>
    </MosaicCard>
  );
}

const SHIFTS: Record<string, [string, string, string][]> = {
  morning: [
    ["Maya Okafor", "Ride operator, Thunder Loop", "MO"],
    ["Dev Patel", "Lifeguard, River Rapids", "DP"],
    ["Sofia Marin", "Guest services, Main gate", "SM"],
  ],
  evening: [
    ["Luis Ortega", "Safety lead, Skyline Plaza", "LO"],
    ["Hana Kimura", "Ride operator, Gravity Drift", "HK"],
  ],
};

function StaffCard() {
  return (
    <MosaicCard
      title="Staff on duty"
      description="148 on shift today"
      action={
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger render={<IconButton iconName="user-plus" variant="outline" aria-label="Add a shift" />} />
            <TooltipContent>Add a shift</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
    >
      <Tabs defaultValue="morning">
        <TabsList>
          <TabsTab value="morning">Morning</TabsTab>
          <TabsTab value="evening">Evening</TabsTab>
          <TabsIndicator />
        </TabsList>
        {Object.entries(SHIFTS).map(([shift, people], shiftIndex) => (
          <TabsPanel key={shift} value={shift} className="w-full">
            <div className="flex-v w-full pt-sm">
              {people.map(([name, role, initials], personIndex) => (
                <div key={name} className="flex items-center gap-md py-xs">
                  <Avatar className={containerColor(3 + shiftIndex * 3 + personIndex)}>
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                  <div className="fill-container">
                    <div className="callout font-500">{name}</div>
                    <div className="subheading color-onsurfacevariant">{role}</div>
                  </div>
                  <Menu>
                    <MenuTrigger
                      render={<IconButton iconName="ellipsis" variant="text" aria-label={`Actions for ${name}`} />}
                    />
                    <MenuPortal>
                      <MenuPositioner sideOffset={8}>
                        <MenuPopup>
                          <MenuItem>Reassign</MenuItem>
                          <MenuItem>Send a message</MenuItem>
                          <MenuSeparator />
                          <MenuItem>End shift</MenuItem>
                        </MenuPopup>
                      </MenuPositioner>
                    </MenuPortal>
                  </Menu>
                </div>
              ))}
            </div>
          </TabsPanel>
        ))}
      </Tabs>
    </MosaicCard>
  );
}

const TASKS = [
  ["brakes", "Inspect Skyfall Tower brakes"],
  ["bulbs", "Replace carousel bulbs"],
  ["rails", "Lubricate Thunder Loop rails"],
  ["soap", "Refill soap stations"],
  ["signs", "Repaint queue-line signs"],
];

function MaintenanceCard() {
  const [done, setDone] = useState<string[]>(["bulbs", "soap"]);
  return (
    <MosaicCard title="Maintenance queue" description="Due before gates open tomorrow">
      <Progress value={Math.round((done.length / TASKS.length) * 100)} className="mb-lg">
        <ProgressLabel>Completed</ProgressLabel>
        <ProgressValue />
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      </Progress>
      <CheckboxGroup aria-label="Maintenance tasks" value={done} onValueChange={setDone} className="flex flex-col gap-sm">
        {TASKS.map(([id, label]) => (
          <label key={id} className="flex items-center gap-sm callout">
            <Checkbox name="task" value={id}>
              <Check />
            </Checkbox>
            {label}
          </label>
        ))}
      </CheckboxGroup>
    </MosaicCard>
  );
}

const REQUESTS = [
  { id: 1, name: "Rina Alvarez", initials: "RA", text: "Stroller left at Kids' Cove entrance", time: "2 min ago" },
  { id: 2, name: "Ben Whitfield", initials: "BW", text: "Wheelchair-accessible route to Skyline Plaza?", time: "9 min ago" },
  { id: 3, name: "Aiko Tanaka", initials: "AT", text: "Phone charger lost near the carousel", time: "21 min ago" },
];

function GuestRequestsCard() {
  const [requests, setRequests] = useState(REQUESTS);
  return (
    <MosaicCard
      title="Guest requests"
      description={requests.length ? `${requests.length} open` : "All caught up"}
    >
      <div className="flex-v gap-md">
        {requests.map((request) => (
          <div key={request.id} className="flex items-start gap-md">
            <Avatar className={containerColor(request.id)}>
              <AvatarFallback>{request.initials}</AvatarFallback>
            </Avatar>
            <div className="fill-container">
              <div className="callout font-500">{request.name}</div>
              <div className="callout">{request.text}</div>
              <div className="caption color-onsurfacevariant">{request.time}</div>
            </div>
            <IconButton
              iconName="check"
              variant="outline"
              aria-label={`Resolve request from ${request.name}`}
              onClick={() => setRequests((current) => current.filter((r) => r.id !== request.id))}
            />
          </div>
        ))}
        {requests.length === 0 && (
          <div className="flex items-center gap-xs callout color-onsurfacevariant">
            <Icon name="sparkles" aria-hidden="true" />
            Nothing waiting on you.
          </div>
        )}
      </div>
    </MosaicCard>
  );
}

const TICKET_TYPES = [
  { label: "Night pass, after 5 PM", value: "night" },
  { label: "Day pass", value: "day" },
  { label: "Season pass", value: "season" },
];

function PromoCard() {
  return (
    <MosaicCard title="Summer night pass" description="Create a limited-time ticket for the guest app.">
      <div className="flex-v gap-md mb-lg">
        <Field>
          <FieldLabel>Promotion name</FieldLabel>
          <FieldControl defaultValue="Summer Night Pass" />
        </Field>
        <Field>
          <FieldLabel nativeLabel={false} render={<div />}>
            Ticket type
          </FieldLabel>
          <Select items={TICKET_TYPES} defaultValue="night">
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
                    {TICKET_TYPES.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <SelectItemIndicator>
                          <Icon name="check" aria-hidden="true" />
                        </SelectItemIndicator>
                        <SelectItemText>{type.label}</SelectItemText>
                      </SelectItem>
                    ))}
                  </SelectList>
                </SelectPopup>
              </SelectPositioner>
            </SelectPortal>
          </Select>
        </Field>
        <div className="flex gap-sm">
          <Field className="fill-container">
            <FieldLabel>Price</FieldLabel>
            <FieldControl defaultValue="$39" />
          </Field>
          <Field className="fill-container">
            <FieldLabel>Ends</FieldLabel>
            <FieldControl defaultValue="Aug 31" />
          </Field>
        </div>
        <label className="flex items-center justify-between gap-md callout">
          Show in the guest app
          <Switch defaultChecked>
            <SwitchThumb />
          </Switch>
        </label>
      </div>
      <div className="flex-v gap-sm">
        <Button className="w-full" startIcon="ticket">
          Publish promotion
        </Button>
        <Button className="w-full" variant="outline">
          Save draft
        </Button>
      </div>
    </MosaicCard>
  );
}

function GuestFaqCard() {
  return (
    <MosaicCard title="Guest FAQ">
      <Accordion>
        <FaqItem question="Is there a height requirement?" answer="Most coasters need 48 inches. Kids' Cove rides have no minimum." />
        <FaqItem question="What happens if it rains?" answer="Indoor attractions stay open. Outdoor rides pause during lightning and reopen after 30 clear minutes." />
        <FaqItem question="Where is lost and found?" answer="Next to First Aid by the main gate. We also post found items in the guest app." />
      </Accordion>
    </MosaicCard>
  );
}

/**
 * A showcase of LiftKit components arranged as an amusement park operations dashboard: live ride status, crowding,
 * weather, staffing, maintenance, and guest requests. Cards flow into balanced columns that collapse as the space
 * narrows.
 */
export function ComponentMosaicV2() {
  return (
    <div className="w-full">
      <ParkHeader />
      <div className="mosaic-v2">
        <TodayCard />
        <CommandCard />
        <ParkMapCard />
        <RideStatusCard />
        <CrowdingCard />
        <WeatherCard />
        <StaffCard />
        <MaintenanceCard />
        <GuestRequestsCard />
        <PromoCard />
        <GuestFaqCard />
      </div>
    </div>
  );
}
