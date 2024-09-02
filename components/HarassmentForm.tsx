import { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";
import * as Yup from "yup";
import styles from "@/styles/harassmentForm.module.css";

interface Values {
  incident: string;
  partiesInvolved: string;
  wantsAnswer: boolean;
  name: string;
  email: string;
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

const HarassmentForm = () => {
  const [wantsAnswer, setWantsAnswer] = useState(false);

  return (
    <Formik
      initialValues={{
        incident: "",
        partiesInvolved: "",
        wantsAnswer: false,
        name: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ values, handleChange, handleBlur, touched, errors }) => (
        <Form className={styles.form}>
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

          <Button type="submit" className="button darkBlue">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default HarassmentForm;
