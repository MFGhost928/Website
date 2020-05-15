// JavaScript Document
<script src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAjcl2I3BtNtV-ju6Y6yA02xT4bHmHWp4dhAzpccxEqzxte7tzxhTZ2Uww0ZCaO2QqcKaV3amGYXXpfw"
	type="text/javascript" charset='utf-8'></script>
	<script language="javascript" type="text/javascript" charset='utf-8'>
		
		funtion load(){
			if (GBrowserIsCompatiable()){
				var map= new GMap2(document.getElementById("map"));
				map.addControl(new GSmallMapControl());
				map.addControl(new GMapTypeControl());
				map.setCenter(new GLatLng(23.173987756729552, 113.24978470802307), 15);
			}
		}
</script>