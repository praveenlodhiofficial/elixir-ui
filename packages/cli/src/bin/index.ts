#!/usr/bin/env node

import { Command } from "commander";

import { addComponent } from "../commands/add";

const program = new Command();

program.name("elixir-ui").description("Elixir UI CLI").version("1.0.0");

program
  .command("add <components...>")
  .description("Add one or more components")
  .action((components: string[]) => {
    addComponent(components);
  });

program.parse();
