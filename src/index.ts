import { Box } from "./box";

const box1 = new Box("Box-1");

const box2 = new Box("Box-2", box1);

box1.hi();
box2.hi();
