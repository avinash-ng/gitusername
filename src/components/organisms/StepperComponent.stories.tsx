import { addDecorator, storiesOf } from "@storybook/react"
import { text, withKnobs, boolean } from "@storybook/addon-knobs"
import React from "react"
import { Grid } from "@material-ui/core"
import StepperComponent, { IStepperProps } from "./StepperComponent"

export const list:IStepperProps[] = [
    {label: 'Room', active: false,disabled: false,completed: false},
    {label: 'Layout', active: false,disabled: false,completed: false},
    {label: 'Collection', active: false,disabled: false,completed: false},
    {label: 'Budget', active: false,disabled: false,completed: false},
    {label: 'Timeline', active: false,disabled: false,completed: false},
    {label: 'Sign up', active: false,disabled: false,completed: false},]

storiesOf('ProgressBar', module).addDecorator(withKnobs)
.add("Progress Bar", () => (

    <StepperComponent StepperList={list}></StepperComponent>
))