
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";

type Tab = "Inicio" | "Sobre mí" | "Habilidades" | "Proyectos" | "Contacto";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Python",
  "SQL",
  "Git y GitHub",
];

const projects = [
  {
    id: 1,
    name: "Smart Notes",
    category: "Aplicación móvil",
    description:
      "Aplicación enfocada en la organización de notas y la gestión de información.",
    technologies: "React Native · TypeScript",
  },
  {
    id: 2,
    name: "Proyecto académico",
    category: "Desarrollo de software",
    description:
      "Proyecto académico para aplicar conocimientos de programación y diseño de interfaces.",
    technologies: "JavaScript · React",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Inicio");

  const openEmail = () => {
    Linking.openURL("mailto:TU_CORREO@gmail.com");
  };

  const openGitHub = () => {
    Linking.openURL("https://github.com/TU_USUARIO");
  };

  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Inicio":
        return (
          <View style={styles.home}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JS</Text>
            </View>

            <Text style={styles.hello}>¡Hola! Soy</Text>
            <Text style={styles.name}>Jazmín Sánchez</Text>
            <Text style={styles.role}>
              Desarrolladora de software
            </Text>

            <Text style={styles.description}>
              Me apasiona la tecnología, el desarrollo de
              aplicaciones y la creación de soluciones
              digitales funcionales.
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => setActiveTab("Sobre mí")}
            >
              <Text style={styles.primaryButtonText}>
                Conoce más sobre mí →
              </Text>
            </TouchableOpacity>

            <Text style={styles.homeFooter}>
              BIENVENIDO A MI PORTAFOLIO DIGITAL
            </Text>
          </View>
        );

      case "Sobre mí":
        return (
          <View>
            <Text style={styles.eyebrow}>CONÓCEME</Text>
            <Text style={styles.sectionTitle}>Sobre mí</Text>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                Mi perfil profesional
              </Text>
              <Text style={styles.bodyText}>
                Soy estudiante de Tecnologías de la Información,
                enfocada en el desarrollo de software
                multiplataforma. Me considero una persona
                responsable, creativa y comprometida con el
                aprendizaje continuo.
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                Formación académica
              </Text>
              <Text style={styles.bodyText}>
                TSU en Tecnologías de la Información
                {"\n"}
                Área: Desarrollo de Software Multiplataforma
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                Mi objetivo
              </Text>
              <Text style={styles.bodyText}>
                Seguir desarrollando mis habilidades
                profesionales, adquirir experiencia y
                participar en proyectos tecnológicos
                innovadores.
              </Text>
            </View>
          </View>
        );

      case "Habilidades":
        return (
          <View>
            <Text style={styles.eyebrow}>LO QUE SÉ HACER</Text>
            <Text style={styles.sectionTitle}>
              Mis habilidades
            </Text>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                Tecnologías y herramientas
              </Text>
              <Text style={styles.bodyText}>
                Tecnologías que utilizo y con las que he
                trabajado durante mi formación.
              </Text>

              <View style={styles.tagsContainer}>
                {skills.map((skill, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                Habilidades personales
              </Text>
              {[
                "Aprendizaje continuo",
                "Trabajo en equipo",
                "Resolución de problemas",
                "Organización",
                "Adaptabilidad",
              ].map((item, index) => (
                <Text key={index} style={styles.listItem}>
                  ✦  {item}
                </Text>
              ))}
            </View>
          </View>
        );

      case "Proyectos":
        return (
          <View>
            <Text style={styles.eyebrow}>MI TRABAJO</Text>
            <Text style={styles.sectionTitle}>
              Mis proyectos
            </Text>
            <Text style={styles.bodyText}>
              Algunos proyectos en los que he trabajado
              durante mi formación académica.
            </Text>

            {projects.map((project) => (
              <View key={project.id} style={styles.projectCard}>
                <View style={styles.projectNumber}>
                  <Text style={styles.projectNumberText}>
                    0{project.id}
                  </Text>
                </View>

                <Text style={styles.projectCategory}>
                  {project.category}
                </Text>

                <Text style={styles.cardTitle}>
                  {project.name}
                </Text>

                <Text style={styles.bodyText}>
                  {project.description}
                </Text>

                <Text style={styles.technologies}>
                  {project.technologies}
                </Text>
              </View>
            ))}
          </View>
        );

      case "Contacto":
        return (
          <View>
            <Text style={styles.eyebrow}>HABLEMOS</Text>
            <Text style={styles.sectionTitle}>
              Contacto
            </Text>

            <Text style={styles.bodyText}>
              ¿Te interesa conocer más sobre mi trabajo?
              Puedes encontrarme en los siguientes medios.
            </Text>

            <TouchableOpacity
              style={styles.contactCard}
              onPress={openEmail}
            >
              <Text style={styles.contactLabel}>CORREO ELECTRÓNICO</Text>
              <Text style={styles.contactValue}>
                Enviar un correo →
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactCard}
              onPress={openGitHub}
            >
              <Text style={styles.contactLabel}>GITHUB</Text>
              <Text style={styles.contactValue}>
                Ver mi repositorio →
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactCard}
              onPress={openLinkedIn}
            >
              <Text style={styles.contactLabel}>LINKEDIN</Text>
              <Text style={styles.contactValue}>
                Mi perfil profesional →
              </Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
    }
  };

  const tabs: Tab[] = [
    "Inicio",
    "Sobre mí",
    "Habilidades",
    "Proyectos",
    "Contacto",
  ];

  const tabLabels: Record<Tab, string> = {
    "Inicio": "Inicio",
    "Sobre mí": "Perfil",
    "Habilidades": "Skills",
    "Proyectos": "Proyectos",
    "Contacto": "Contacto",
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.logo}>LIT.</Text>
        <Text style={styles.topBarText}>MI PORTAFOLIO</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
      </ScrollView>

      <View style={styles.navigation}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.navItem}
            onPress={() => setActiveTab(tab)}
          >
            <View
              style={[
                styles.navIndicator,
                activeTab === tab && styles.activeIndicator,
              ]}
            />
            <Text
              style={[
                styles.navText,
                activeTab === tab && styles.activeNavText,
              ]}
            >
              {tabLabels[tab]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6FA",
  },

  topBar: {
    height: 60,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEAF2",
  },

  logo: {
    fontSize: 25,
    fontWeight: "900",
    color: "#7654A5",
  },

  topBarText: {
    fontSize: 10,
    letterSpacing: 2,
    color: "#938A9E",
    fontWeight: "600",
  },

  scroll: {
    flex: 1,
  },

  content: {
    padding: 24,
    paddingBottom: 35,
  },

  home: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 65,
    paddingBottom: 40,
  },

  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: "#E9DDF5",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  avatarText: {
    fontSize: 34,
    fontWeight: "800",
    color: "#7654A5",
  },

  hello: {
    color: "#938A9E",
    fontSize: 17,
  },

  name: {
    fontSize: 32,
    fontWeight: "800",
    color: "#33283D",
    textAlign: "center",
    marginTop: 8,
  },

  role: {
    color: "#7654A5",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
  },

  description: {
    color: "#77717E",
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
    marginTop: 24,
    marginBottom: 30,
  },

  primaryButton: {
    backgroundColor: "#7654A5",
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },

  homeFooter: {
    color: "#AAA1B4",
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 55,
  },

  eyebrow: {
    color: "#9477B6",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: 18,
    marginBottom: 8,
  },

  sectionTitle: {
    color: "#33283D",
    fontSize: 29,
    fontWeight: "800",
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 17,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#EFEAF4",
  },

  cardTitle: {
    fontSize: 18,
    color: "#403449",
    fontWeight: "800",
    marginBottom: 12,
  },

  bodyText: {
    fontSize: 14,
    color: "#77717E",
    lineHeight: 23,
    marginBottom: 12,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
    gap: 9,
  },

  tag: {
    backgroundColor: "#F0E9F7",
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 9,
  },

  tagText: {
    color: "#7654A5",
    fontSize: 12,
    fontWeight: "700",
  },

  listItem: {
    color: "#77717E",
    fontSize: 14,
    marginTop: 12,
  },

  projectCard: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 17,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#EFEAF4",
  },

  projectNumber: {
    backgroundColor: "#E9DDF5",
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  projectNumberText: {
    color: "#7654A5",
    fontWeight: "800",
  },

  projectCategory: {
    color: "#9477B6",
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 9,
  },

  technologies: {
    color: "#7654A5",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 8,
  },

  contactCard: {
    backgroundColor: "#FFFFFF",
    padding: 22,
    borderRadius: 15,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#EFEAF4",
  },

  contactLabel: {
    color: "#AAA1B4",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginBottom: 10,
  },

  contactValue: {
    color: "#7654A5",
    fontSize: 16,
    fontWeight: "700",
  },

  navigation: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEEAF2",
    paddingTop: 12,
    paddingBottom: 10,
    justifyContent: "space-around",
  },

  navItem: {
    alignItems: "center",
    flex: 1,
  },

  navIndicator: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "transparent",
    marginBottom: 7,
  },

  activeIndicator: {
    backgroundColor: "#7654A5",
  },

  navText: {
    fontSize: 10,
    color: "#A49CAA",
    fontWeight: "600",
  },

  activeNavText: {
    color: "#7654A5",
    fontWeight: "800",
  },
});





