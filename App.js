import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Modal,
  Animated,
} from "react-native";

const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [loginVisible, setLoginVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  // Tambahan state untuk fitur pembelian
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("dana");
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const fadeAnim = new Animated.Value(1);

  const bannerImages = [
    "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/3zt2-1fb4-original.jpeg",
    "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/SAVE_20241026_221632-25bf-original.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start();

      setCurrentBannerIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: "Mobile Legends",
      description: "Mobile Legends",
      price: 50000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW2-6d3d-original.jpeg",
    },
    {
      id: 2,
      name: "Free Fire Indonesia",
      description: "Free Fire Indonesia",
      price: 45000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW1%20(2)-652e-original.jpg",
    },
    {
      id: 3,
      name: "Honor Of Kings",
      description: "Honor Of Kings",
      price: 55000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW6%20(2)-4bb7-original.jpg",
    },
    {
      id: 4,
      name: "PUBG Mobile",
      description: "PUBG Mobile",
      price: 60000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW7-debd-original.jpg",
    },
    {
      id: 5,
      name: "Arena Breakout",
      description: "Arena Breakout",
      price: 40000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW8-7a05-original.jpg",
    },
    {
      id: 6,
      name: "Clash Royale",
      description: "Clash Royale",
      price: 35000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW37-f87c-original.jpg",
    },
    {
      id: 7,
      name: "Metal Slug: Awakening",
      description: "Metal Slug: Awakening",
      price: 45000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW10-7c52-original.jpg",
    },
    {
      id: 8,
      name: "Ghensin Impact",
      description: "Ghensin Impact",
      price: 65000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW11-91bc-original.jpg",
    },
    {
      id: 9,
      name: "Honkai Star Rail",
      description: "Honkai Star Rail",
      price: 70000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW12-2d45-original.jpg",
    },
    {
      id: 10,
      name: "Honkai Impact 3",
      description: "Honkai Impact 3",
      price: 55000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW13-aa06-original.jpg",
    },
    {
      id: 11,
      name: "Undawn",
      description: "Undawn",
      price: 40000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW14-2a51-original.jpg",
    },
    {
      id: 12,
      name: "Night Crows",
      description: "Night Crows",
      price: 45000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW15-e6110-original.jpg",
    },
    {
      id: 13,
      name: "Call Of Dutty Mobile",
      description: "Call Of Dutty Mobile",
      price: 65000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW33-3d7d-original.jpg",
    },
    {
      id: 14,
      name: "Valorant",
      description: "Valorant",
      price: 75000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW34-de8f-original.jpg",
    },
    {
      id: 15,
      name: "Clash Of Clans",
      description: "Clash Of Clans",
      price: 35000,
      image:
        "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/NEW36-91102-original.jpg",
    },
  ];

  // Fungsi untuk menangani klik produk
  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setShowPurchaseModal(true);
  };

  // Fungsi untuk menangani pembelian
  const handlePurchase = () => {
    alert(`Pembelian ${selectedProduct.name} sebanyak ${quantity} berhasil!`);
    setShowPurchaseModal(false);
    setSelectedProduct(null);
    setQuantity("1");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://w0.peakpx.com/wallpaper/98/976/HD-wallpaper-orange-graphic-orange-colour-background.jpg",
      }}
      style={styles.container}
    >
      {/* Modal Pembelian */}
      <Modal
        visible={showPurchaseModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <ScrollView style={{ width: "100%" }}>
            <View style={[styles.modalContent]}>
              <Text style={styles.modalTitle}>Detail Pembelian</Text>

              {selectedProduct && (
                <View style={styles.productDetail}>
                  <Image
                    source={{ uri: selectedProduct.image }}
                    style={styles.modalProductImage}
                  />
                  <Text style={styles.modalProductName}>
                    {selectedProduct.name}
                  </Text>
                  <Text style={styles.modalProductPrice}>
                    Rp {selectedProduct.price?.toLocaleString()}
                  </Text>
                </View>
              )}

              <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>Jumlah</Text>
                <TextInput
                  style={styles.modalInput}
                  keyboardType="numeric"
                  value={quantity}
                  onChangeText={setQuantity}
                />

                <Text style={styles.inputLabel}>ID Game</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Masukkan ID Game Anda"
                />

                <Text style={styles.inputLabel}>Server</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Masukkan Server Game Anda"
                />

                <Text style={styles.inputLabel}>Metode Pembayaran</Text>
                <View style={styles.paymentOptions}>
                  <TouchableOpacity
                    style={[
                      styles.paymentOption,
                      paymentMethod === "dana" && styles.selectedPayment,
                    ]}
                    onPress={() => setPaymentMethod("dana")}
                  >
                    <Text
                      style={
                        paymentMethod === "dana"
                          ? styles.selectedPaymentText
                          : {}
                      }
                    >
                      DANA
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.paymentOption,
                      paymentMethod === "ovo" && styles.selectedPayment,
                    ]}
                    onPress={() => setPaymentMethod("ovo")}
                  >
                    <Text
                      style={
                        paymentMethod === "ovo"
                          ? styles.selectedPaymentText
                          : {}
                      }
                    >
                      OVO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.paymentOption,
                      paymentMethod === "gopay" && styles.selectedPayment,
                    ]}
                    onPress={() => setPaymentMethod("gopay")}
                  >
                    <Text
                      style={
                        paymentMethod === "gopay"
                          ? styles.selectedPaymentText
                          : {}
                      }
                    >
                      GOPAY
                    </Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.purchaseButton}
                  onPress={handlePurchase}
                >
                  <Text style={styles.purchaseButtonText}>Beli Sekarang</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowPurchaseModal(false)}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>

      <Modal visible={loginVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {isRegister ? "Register" : "Login"}
            </Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />

            <TextInput
              style={styles.modalInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            {isRegister && (
              <TextInput
                style={styles.modalInput}
                placeholder="Konfirmasi Password"
                secureTextEntry
              />
            )}

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setLoginVisible(false)}
            >
              <Text style={styles.modalButtonText}>
                {isRegister ? "Register" : "Login"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
              <Text style={styles.switchText}>
                {isRegister
                  ? "Sudah punya akun? Login"
                  : "Belum punya akun? Register"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setLoginVisible(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <Image
          source={{
            uri: "https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/3ztstore/20220609_094857-9f62-original.png",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Fedry X 3ztstore</Text>

        <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLoginVisible(true)}>
          <Text style={styles.loginButton}>Login / Register</Text>
        </TouchableOpacity>
      </View>

      {showSearch && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari..."
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity onPress={() => setShowSearch(false)}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView style={styles.content}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem}>
            <Text>Beranda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text>Semua Game</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text>Lacak Pesanan</Text>
          </TouchableOpacity>
        </View>

        <Animated.Image
          source={{ uri: bannerImages[currentBannerIndex] }}
          style={[styles.banner, { opacity: fadeAnim }]}
        />

        <View style={styles.productGrid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() => handleProductPress(product)}
            >
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>
                Rp {product.price?.toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Fedry X 3ztstore. All rights reserved.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#F57C00",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#000",
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "#F57C00",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#E65100",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 5,
    height: 40,
    marginRight: 10,
  },
  closeIcon: {
    fontSize: 20,
    color: "#000",
  },
  searchIcon: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  loginButton: {
    color: "#000",
    marginLeft: 10,
  },
  content: {
    flex: 1,
  },
  navbar: {
    backgroundColor: "#EF6C00",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  navItem: {
    padding: 5,
  },
  banner: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  productCard: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: 150,
  },
  productName: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "rgba(128, 128, 128, 0.7)",
    color: "#fff",
  },
  footer: {
    backgroundColor: "#D84315",
    padding: 15,
    alignItems: "center",
  },
  footerText: {
    color: "#000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    marginVertical: 50,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#F57C00",
  },
  modalInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#F57C00",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  modalButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#F57C00",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    marginTop: 15,
    color: "#F57C00",
    textDecorationLine: "underline",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#F57C00",
  },
  // Styles tambahan untuk fitur pembelian
  modalProductImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalProductName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalProductPrice: {
    fontSize: 18,
    color: "#F57C00",
    marginBottom: 15,
  },
  productDetail: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  inputLabel: {
    alignSelf: "flex-start",
    marginBottom: 5,
    fontWeight: "bold",
    color: "#333",
  },
  paymentOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  paymentOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#F57C00",
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
  },
  selectedPayment: {
    backgroundColor: "#F57C00",
  },
  selectedPaymentText: {
    color: "white",
  },
  purchaseButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  purchaseButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    color: "#F57C00",
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
  },
});

export default App;
