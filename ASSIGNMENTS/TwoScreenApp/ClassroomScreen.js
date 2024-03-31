import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const ClassroomScreen = () => {
  return (
    <ImageBackground source={require('./backgroung.jpeg')} style={styles.background}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Virtual Classroom App</Text>
        
        {/* Menu Items */}
        <View style={styles.row}>
          {/* Category */}
          <TouchableOpacity style={styles.item}>
            <Image source={require('./category.png')} style={styles.icon} />
            <Text style={styles.itemText}>Category</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.item}>
            <Image source={require('./class.png')} style={styles.icon} />
            <Text style={styles.itemText}>Classes</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.item}>
            <Image source={require('./course.png')} style={styles.icon} />
            <Text style={styles.itemText}>Free Courses</Text>
          </TouchableOpacity>

         
          <TouchableOpacity style={styles.item}>
            <Image source={require('./book.png')} style={styles.icon} />
            <Text style={styles.itemText}>Bookstore</Text>
          </TouchableOpacity>

         
          <TouchableOpacity style={styles.item}>
            <Image source={require('./live.png')} style={styles.icon} />
            <Text style={styles.itemText}>Live Courses</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.item}>
            <Image source={require('./leader.png')} style={styles.icon} />
            <Text style={styles.itemText}>Leaderboard</Text>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.item}>
            <Image source={require('./chat.png')} style={styles.icon} />
            <Text style={styles.itemText}>Chatbot</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default ClassroomScreen;
