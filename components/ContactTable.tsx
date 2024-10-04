import { Contact } from "@/lib/cmsClient";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  TableSortLabel,
} from "@mui/material";
import styles from "@/styles/contactTable.module.css";
import { useMemo, useState } from "react";
import { useTranslate } from "@/hooks/TranslationContext";

export type ContactTableProps = {
  contactData: Contact[];
};

type Order = "asc" | "desc";

const ContactTable = ({ contactData }: ContactTableProps) => {
  const t = useTranslate();
  const [searchQuery, setSearchQuery] = useState("");
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Contact>("first_name");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (property: keyof Contact) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = useMemo(
    () =>
      contactData
        .filter((contact) =>
          ["first_name", "last_name", "contact", "label_key"].some((key) =>
            contact[key as keyof Contact]
              ?.toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase()),
          ),
        )
        .sort((a, b) => {
          if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
          if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
          return 0;
        }),
    [searchQuery, order, orderBy, contactData],
  );

  return (
    <div className={styles.tableContainer}>
      <TableContainer className={styles.table}>
        <div className={styles.tableLabel}>
          <h2>{t("contact:tableLabel")}</h2>
          <TextField
            label={t("contact:searchLabel")}
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchBar}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "2.5rem",
                "& fieldset": {
                  borderRadius: "5rem",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#132c43", // Border color on focus
                },
              },
              "& .MuiInputLabel-root": {
                lineHeight: "1rem", // Align the label vertically to the center
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#132c43", // Label color on focus
              },
            }}
          />
        </div>
        <Table>
          <TableHead className={styles.tableHead}>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "label_key"}
                  direction={order}
                  onClick={() => handleSort("label_key")}
                >
                  {t("contact:title")}
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "first_name"}
                  direction={order}
                  onClick={() => handleSort("first_name")}
                >
                  {t("contact:firstName")}
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "last_name"}
                  direction={order}
                  onClick={() => handleSort("last_name")}
                >
                  {t("contact:lastName")}
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "contact"}
                  direction={order}
                  onClick={() => handleSort("contact")}
                >
                  {t("contact:contactLabel")}
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{t(contact.label_key)}</TableCell>
                <TableCell>{contact.first_name}</TableCell>
                <TableCell>{contact.last_name}</TableCell>
                <TableCell>{contact.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactTable;
