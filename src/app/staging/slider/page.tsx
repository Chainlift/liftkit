"use client";

import React from "react";
import { Slider } from "@/registry/nextjs/components/slider";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import { Label } from "@/registry/nextjs/components/label";

export default function SliderDemo() {
  const [singleValue, setSingleValue] = React.useState([50]);
  const [rangeValue, setRangeValue] = React.useState([20, 80]);
  const [volume, setVolume] = React.useState([75]);
  const [brightness, setBrightness] = React.useState([60]);
  const [price, setPrice] = React.useState([500, 2000]);
  const [temperature, setTemperature] = React.useState([22]);

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Slider Examples</Heading>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Basic Single Value - Matches Tailwind Demo */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Basic Slider
              </Heading>
              <div style={{ width: "60%" }}>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </div>

            {/* Controlled Single Value */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Controlled Single Value
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Label>Value: {singleValue[0]}</Label>
                <Slider
                  value={singleValue}
                  onValueChange={setSingleValue}
                  max={100}
                  step={1}
                  style={{ width: "20rem" }}
                />
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Current value: {singleValue[0]}%
                </div>
              </div>
            </div>

            {/* Range Slider */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Range Slider
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Label>
                  Range: {rangeValue[0]} - {rangeValue[1]}
                </Label>
                <Slider
                  value={rangeValue}
                  onValueChange={setRangeValue}
                  max={100}
                  step={1}
                  style={{ width: "20rem" }}
                />
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Selected range: {rangeValue[0]}% to {rangeValue[1]}%
                </div>
              </div>
            </div>

            {/* Settings Panel */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Settings Panel
              </Heading>
              <div
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--card)",
                  maxWidth: "24rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {/* Volume */}
                  <div>
                    <Label htmlFor="volume-slider" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                      Volume
                    </Label>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        margin: "0.25rem 0 0.75rem 0",
                      }}
                    >
                      Adjust the system volume level
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "0.875rem", minWidth: "1rem" }}>🔈</span>
                      <Slider
                        id="volume-slider"
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        step={5}
                        style={{ flex: 1 }}
                      />
                      <span style={{ fontSize: "0.875rem", minWidth: "1rem" }}>🔊</span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        marginTop: "0.5rem",
                      }}
                    >
                      {volume[0]}%
                    </div>
                  </div>

                  {/* Brightness */}
                  <div>
                    <Label htmlFor="brightness-slider" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                      Brightness
                    </Label>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        margin: "0.25rem 0 0.75rem 0",
                      }}
                    >
                      Control screen brightness
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "0.875rem", minWidth: "1rem" }}>🌑</span>
                      <Slider
                        id="brightness-slider"
                        value={brightness}
                        onValueChange={setBrightness}
                        max={100}
                        step={10}
                        style={{ flex: 1 }}
                      />
                      <span style={{ fontSize: "0.875rem", minWidth: "1rem" }}>🌞</span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        marginTop: "0.5rem",
                      }}
                    >
                      {brightness[0]}%
                    </div>
                  </div>

                  {/* Temperature */}
                  <div>
                    <Label htmlFor="temp-slider" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                      Temperature
                    </Label>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        margin: "0.25rem 0 0.75rem 0",
                      }}
                    >
                      Set room temperature
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span style={{ fontSize: "0.875rem", minWidth: "2rem" }}>❄️</span>
                      <Slider
                        id="temp-slider"
                        value={temperature}
                        onValueChange={setTemperature}
                        min={16}
                        max={30}
                        step={0.5}
                        style={{ flex: 1 }}
                      />
                      <span style={{ fontSize: "0.875rem", minWidth: "2rem" }}>🔥</span>
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--muted-foreground)",
                        marginTop: "0.5rem",
                      }}
                    >
                      {temperature[0]}°C
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Price Filter
              </Heading>
              <div
                style={{
                  padding: "1.5rem",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                  backgroundColor: "var(--card)",
                  maxWidth: "20rem",
                }}
              >
                <Label style={{ fontSize: "0.875rem", fontWeight: 500 }}>Price Range</Label>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                    margin: "0.25rem 0 1rem 0",
                  }}
                >
                  Filter products by price range
                </p>
                <Slider value={price} onValueChange={setPrice} min={0} max={5000} step={50} style={{ width: "100%" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "0.75rem",
                    fontSize: "0.875rem",
                  }}
                >
                  <span>${price[0]}</span>
                  <span>${price[1]}</span>
                </div>
                <div
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.5rem",
                    backgroundColor: "var(--muted)",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  Showing products from ${price[0]} to ${price[1]}
                </div>
              </div>
            </div>

            {/* Different Steps */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Different Step Values
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <Label style={{ fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>
                    Step: 1 (Fine control)
                  </Label>
                  <Slider defaultValue={[25]} max={100} step={1} style={{ width: "16rem" }} />
                </div>

                <div>
                  <Label style={{ fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>
                    Step: 10 (Coarse control)
                  </Label>
                  <Slider defaultValue={[30]} max={100} step={10} style={{ width: "16rem" }} />
                </div>

                <div>
                  <Label style={{ fontSize: "0.875rem", fontWeight: 500, display: "block", marginBottom: "0.5rem" }}>
                    Step: 25 (Quarter increments)
                  </Label>
                  <Slider defaultValue={[50]} max={100} step={25} style={{ width: "16rem" }} />
                </div>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Disabled State
              </Heading>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <Label
                    style={{
                      fontSize: "0.875rem",
                      display: "block",
                      marginBottom: "0.5rem",
                      opacity: 0.5,
                    }}
                  >
                    Disabled single value
                  </Label>
                  <Slider defaultValue={[60]} max={100} step={1} disabled style={{ width: "16rem" }} />
                </div>

                <div>
                  <Label
                    style={{
                      fontSize: "0.875rem",
                      display: "block",
                      marginBottom: "0.5rem",
                      opacity: 0.5,
                    }}
                  >
                    Disabled range
                  </Label>
                  <Slider defaultValue={[30, 70]} max={100} step={1} disabled style={{ width: "16rem" }} />
                </div>
              </div>
            </div>

            {/* Vertical Slider */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Vertical Orientation
              </Heading>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  alignItems: "end",
                  height: "12rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Label style={{ fontSize: "0.75rem" }}>Bass</Label>
                  <Slider orientation="vertical" defaultValue={[60]} max={100} step={5} />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Label style={{ fontSize: "0.75rem" }}>Mid</Label>
                  <Slider orientation="vertical" defaultValue={[40]} max={100} step={5} />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Label style={{ fontSize: "0.75rem" }}>Treble</Label>
                  <Slider orientation="vertical" defaultValue={[80]} max={100} step={5} />
                </div>
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--muted-foreground)",
                  marginTop: "1rem",
                }}
              >
                Audio equalizer controls
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
