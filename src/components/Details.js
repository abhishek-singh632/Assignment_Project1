import React, {  useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//import Toolbar from '@mui/material/Toolbar,';
import Toolbar from '@mui/material/Toolbar';
//import Radio from '@mui/material/Radio,';
import Radio from '@mui/material/Radio';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import { ThemeProvider } from '@mui/material/styles';
// import { createTheme } from '@mui/material/styles';

// import { makeStyles } from '@mui/styles';

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";


// // Create a theme using createTheme
// const theme = createTheme();

// // Usage example in a component
// function useStyles() {
//   return (
//     <ThemeProvider theme={theme}>
//       makeStyles={{ margin: theme.spacing(1) }}
//     </ThemeProvider>
//   );
// }

import { styled } from '@mui/system';

const useStyles = styled((theme) => ({
  button : {
    marginRight: theme.spacing(2),
  },
}));


function getSteps() {
    return [
      "Basic information",
      "Contact Information",
      "Personal Information",
      "Payment",
    ];
  }
   
  const BasicForm = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              label="User Name"
              variant="outlined"
              placeholder="Enter Your User Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
  
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Email ID"
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
        <Controller
          control={control}
          name="nickName"
          render={({ field }) => (
            <TextField
              id="nick-name"
              label="Phone No"
              variant="outlined"
              placeholder="Enter Your Phone No"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };
  const ContactForm = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="emailAddress"
          render={({ field }) => (
            <TextField
              id="email"
              label="Address Line 1"
              variant="outlined"
              placeholder="Enter Your Address Line 1 Address"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
  
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              id="phone-numberdsfg"
              label="Address Line 2"
              variant="outlined"
              placeholder="Enter Your Address Line 2"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="alternatePhone"
          render={({ field }) => (
            <TextField
              id="alternate-phone144"
              label="State"
              variant="outlined"
              placeholder="Enter Your State"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

       <Controller
          control={control}
          name="alternatePhones"
          render={({ field }) => (
            <TextField
              id="alternate-phone24"
              label="Pin Code"
              variant="outlined"
              placeholder="Enter Your State"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />

       <Controller
          control={control}
          name="alternatePhone3"
          render={({ field }) => (
            <TextField
              id="alternate-phones3"
              label="Country"
              variant="outlined"
              placeholder="Enter Your State"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
      </>
    );
  };
  const PersonalForm = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="address123"
          render={({ field }) => (
            <TextField
              id="address1"
              label="File Upload ( png / pdf )"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="address1"
          render={({ field }) => (
            <TextField
              id="address1"
              label="File Upload ( png / pdf )"
              variant="outlined"
              placeholder="Enter Your Address 1"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        {/* <Controller
          control={control}
          name="address2"
          render={({ field }) => (
            <TextField
              id="address2"
              label="Address 2"
              variant="outlined"
              placeholder="Enter Your Address 2"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <TextField
              id="country"
              label="Country"
              variant="outlined"
              placeholder="Enter Your Country Name"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        /> */}
      </>
    );
  };
  const Multiple_File_Upload = () => {
    const { control } = useFormContext();
    return (
      <>
        <Controller
          control={control}
          name="Upload_12"
          render={({ field }) => (
            <TextField
              id="Upload_1"
              label="Upload_1"
              variant="outlined"
              placeholder="Enter Your Upload_1"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardMonth"
          render={({ field }) => (
            <TextField
              id="cardMonth"
              label="Upload_2"
              variant="outlined"
              placeholder="Enter Your Upload_2"
              fullWidth
              margin="normal"
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="cardYear345"
          render={({ field }) => (
            <TextField
              id="cardYear"
              label="Upload_3"
              variant="outlined"
              placeholder="Enter Your Upload_5"
              fullWidth
              margin="normal"
              {...field}
            />
            )}
        />
        <Controller
          control={control}
          name="cardYear35"
          render={({ field }) => (
            <TextField
              id="cardYear"
              label="Upload_5"
              variant="outlined"
              placeholder="Enter Your Upload_5"
              fullWidth
              margin="normal"
              {...field}
            />
            )}
        />
        <Controller
          control={control}
          name="cardYear43"
          render={({ field }) => (
            <TextField
              id="cardYear"
              label="Upload_5"
              variant="outlined"
              placeholder="Enter Your Upload_5"
              fullWidth
              margin="normal"
              {...field}
            />
            )}
        />
        
      </>
    );
  };
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicForm />;
  
      case 1:
        return <ContactForm />;
      case 2:
        return <PersonalForm />;
      case 3:
        return <Multiple_File_Upload />;
      default:
        return "unknown step";
    }
  }
  
  
  const Details = () => {
    const classes = useStyles();
    const methods = useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
        nickName: "",
        emailAddress: "",
        phoneNumber: "",
        alternatePhone: "",
        address1: "",
        address2: "",
        country: "",
        Upload_1: "",
        cardMonth: "",
        cardYear: "",
      },
    });
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();
  
    const isStepOptional = (step) => {
      return step === 1 || step === 2;
    };
  
    const isStepSkipped = (step) => {
      return skippedSteps.includes(step);
    };
  
    const handleNext = (data) => {
      console.log(data);
      if (activeStep === steps.length - 1) {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((data) => data.json())
          .then((res) => {
            console.log(res);
            setActiveStep(activeStep + 1);
          });
      } else {
        setActiveStep(activeStep + 1);
        setSkippedSteps(
          skippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      }
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepSkipped(activeStep)) {
        setSkippedSteps([...skippedSteps, activeStep]);
      }
      setActiveStep(activeStep + 1);
    };
  
    // const onSubmit = (data) => {
    //   console.log(data);
    // };
    return (
      <div>
        <Radio alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
           
                <Toolbar
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Toolbar>
                
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Radio>
  
        {activeStep === steps.length ? (
           
          <Toolbar variant="h3" align="center">
            SuccessFully Submited File
          </Toolbar>
          
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}
  
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )}
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </form>
            </FormProvider>
          </>
        )}
      </div>
    );
};
  

export default Details












































