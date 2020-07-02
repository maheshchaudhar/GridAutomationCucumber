package commonutilities;

import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class CommonUtilities {

	
	public static Properties loadPropertyFile() {
		 Properties prop=null;
		try {
			 FileReader reader=new FileReader("config.properties");  
			 prop=new Properties();  
			 prop.load(reader);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return prop;
	}
}
