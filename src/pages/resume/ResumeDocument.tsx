import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export function ResumeDocument() {
  return (
    <Document title="Steve Jenkins Resume" author="Steve Jenkins" language="en">
      <Page size="LETTER" style={styles.page}>
        <Text>
          I'm a highly motivated, pro-active web developer & engineering manager
          specializing in large web applications. With 10+ years post university
          experience in fast paced start up companies in the UK and Canada.
          Currently living Squamish, BC, Canada as a citizen.
        </Text>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
}
