import { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Alert,
  Snackbar,
} from "@mui/material";
import * as Yup from "yup";
import styles from "@/styles/harassmentForm.module.css";

interface Values {
  incident: string;
  partiesInvolved: string;
  wantsAnswer: boolean;
  name: string;
  email: string;
  honeypot1: string;
  honeypot2: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .when("wantsAnswer", (wantsAnswer, schema) =>
      wantsAnswer ? schema.required("Email is required") : schema,
    ),
  name: Yup.string().when("wantsAnswer", (wantsAnswer, schema) =>
    wantsAnswer ? schema.required("Name is required") : schema,
  ),
});

const noValidationSchema = Yup.object({
  email: Yup.string(),
  name: Yup.string(),
});

const HarassmentForm = () => {
  const [wantsAnswer, setWantsAnswer] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );
  const [buttonText, setButtonText] = useState("Submit");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const corsProxy: string = "https://cors-anywhere.herokuapp.com/";

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          incident: "",
          partiesInvolved: "",
          wantsAnswer: false,
          name: "",
          email: "",
          honeypot1: "",
          honeypot2: "",
        }}
        validationSchema={wantsAnswer ? validationSchema : noValidationSchema}
        onSubmit={(
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>,
        ) => {
          if (values.honeypot1 || values.honeypot2) {
            setSnackbarMessage("Service denied");
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            setSubmitting(false);
            setButtonText("Submit");
            setButtonDisabled(false);
            return;
          }

          setButtonText("Sending");
          setButtonDisabled(true);

          const formData = new FormData();
          formData.append("entry.898010333", values.incident); // Example ID for 'incident'
          formData.append("entry.1968992256", values.partiesInvolved); // Example ID for 'partiesInvolved'
          formData.append("entry.200517309", values.name); // Example ID for 'name'
          formData.append("entry.1828602041", values.email); // Example ID for 'email'

          fetch(`${corsProxy + process.env.NEXT_PUBLIC_HARASSMENT_FORM_URL}`, {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                setSnackbarMessage(
                  "Your report has been submitted successfully.",
                );
                setSnackbarSeverity("success");
                resetForm(); // Clear the form on successful submission
              } else {
                setSnackbarMessage(
                  "There was a problem submitting your report.",
                );
                setSnackbarSeverity("error");
              }
              setSnackbarOpen(true);
            })
            .catch((error) => {
              console.error("An error occurred:", error);
              setSnackbarMessage("An error occurred. Please try again later.");
              setSnackbarSeverity("error");
              setSnackbarOpen(true);
            })
            .finally(() => {
              setSubmitting(false);
              setButtonText("Submit");
              setButtonDisabled(false);
            });
        }}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form className={styles.form}>
            {/* Honeypot Fields */}
            <div style={{ display: "none" }}>
              <TextField
                id="honeypot1"
                name="honeypot1"
                value={values.honeypot1}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                id="honeypot2"
                name="honeypot2"
                value={values.honeypot2}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <TextField
              fullWidth
              id="incident"
              name="incident"
              label="Tell about what happened in your own words"
              multiline
              rows={4}
              variant="outlined"
              value={values.incident}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.incident && Boolean(errors.incident)}
              helperText={touched.incident && errors.incident}
              className={styles.inputField}
            />

            <TextField
              fullWidth
              id="partiesInvolved"
              name="partiesInvolved"
              label="Were there other people there?"
              multiline
              rows={4}
              variant="outlined"
              value={values.partiesInvolved}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.partiesInvolved && Boolean(errors.partiesInvolved)}
              helperText={touched.partiesInvolved && errors.partiesInvolved}
              className={styles.inputField}
            />

            <FormControlLabel
              control={
                <Switch
                  checked={wantsAnswer}
                  onChange={() => setWantsAnswer(!wantsAnswer)}
                  name="wantsAnswer"
                  color="success"
                />
              }
              label="I want to be answered"
              className={styles.switchLabel}
            />

            {wantsAnswer && (
              <>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  className={styles.inputField}
                />

                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  className={styles.inputField}
                />
              </>
            )}

            <Button
              type="submit"
              className="button darkBlue"
              disabled={buttonDisabled}
            >
              {buttonText}
            </Button>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default HarassmentForm;
