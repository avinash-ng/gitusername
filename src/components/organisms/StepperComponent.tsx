
import { Stepper, Divider, StepLabel, Step,StepContent,Button } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from "react"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';

export interface IStepperProps { 
    label: string,
    completed: boolean,
    active: boolean,
    disabled: boolean
}

export interface StepperProps {
  StepperList: IStepperProps[]
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      color: '#2d3e50'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    icon:{
    //  text: <Expand/>,
     color: '#2d3e50'
    
    }
  }),
);
const StepperComponent:React.FC<StepperProps> = ({StepperList}) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = StepperList;

  const handleNext = (each: IStepperProps) => {
      each.completed = true;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (each: IStepperProps) => {
        each.completed = false;
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

    return (
      
        <Stepper orientation="vertical" activeStep={activeStep}>
            {StepperList.map((each: IStepperProps, index:number) => (
                <Step key={index} >
                    <StepLabel 
                        StepIconComponent={each.active ===true ? CheckCircleOutlineIcon: (each.completed===true ? CheckCircleIcon: (each.disabled===true ? CheckCircleOutlineIcon : CheckCircleOutlineIcon)) }>
                          {each.label}
                    </StepLabel>
                    <StepContent>
           
                          <div className={classes.actionsContainer}>
                              <Button
                                disabled={activeStep === 0}
                                onClick={() => handleBack(each)}
                                className={classes.button}
                              >
                              <ArrowBack/>
                              </Button>
                              <Button
                                onClick={() => handleNext(each)}
                                className={classes.button}
                              >
                                <ArrowForward/>
                              </Button>
                          </div>
                          {/* Hello WOrdl */}
                    </StepContent>
          
                </Step>
            ))}
        </Stepper>
    )
}
export default StepperComponent;
