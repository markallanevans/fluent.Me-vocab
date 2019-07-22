import { StyleSheet } from 'react-native'
import { Colors } from './theme/'
import appStyles from './AppStyles'
import styles from './styles'

const categoryItemStyles = StyleSheet.create({
  categoryWrapper: {
    flex: 1,
    flexDirection: 'row',
    margin: 2.5,
    justifyContent: 'space-between',
    borderRadius: 50,
    borderColor: Colors.$secondaryWhite
  },
  imageWrapper: {
    height: 50,
    width: 50,
    overflow: 'hidden',
    borderRadius: 25,
    marginLeft: 2.5,
    marginTop: 2.5,
    marginBottom: 2.5
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  categoryTitle: {
    marginLeft: 40,
    marginRight: 40,
    alignSelf: 'center',
    color: Colors.$secondaryRed
  },
  categoryItemCount: {
    fontSize: 25,
    color: Colors.$primaryRed,
    alignSelf: 'center',
    marginRight: 10
  },
  indicatorStyle: {
    borderWidth: 0,
    color: Colors.$secondaryRed
  }
})

export default categoryItemStyles
