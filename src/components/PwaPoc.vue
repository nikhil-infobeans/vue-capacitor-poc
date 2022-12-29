<template>
  <v-card class="mx-auto">
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            theme="dark"
          >
            <v-card-title class="text-h5">
              Get User Location
            </v-card-title>

            <v-card-subtitle v-if="errorStr">
              Sorry, but the following error occurred: {{errorStr}}
            </v-card-subtitle>
            <v-card-subtitle v-if="gettingLocation">
              Getting your location...
            </v-card-subtitle>
            <v-card-subtitle v-if="location">
              Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                class="ml-2"
                variant="outlined"
                size="small"
                @click="locateMe">
                Locate Me
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="#1F7087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Camera
                </v-card-title>

                <v-card-subtitle>PWA Camera</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2"
                    variant="outlined"
                    size="small"
                    @click="takePicture"
                  >
                    Take Picture
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img :src="imgSrc"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
  </v-card>
</template>

<script>
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export default {
  name: 'PwaPoc',
  props: {
    msg: String
  },
  data() {
    return {
      location: null,
      gettingLocation: false,
      errorStr: null,
      imgSrc: '',
    }
  },
  methods: {
    async locateMe() {
      try {
          this.gettingLocation = true;
          const coordinates = await Geolocation.getCurrentPosition();
          this.gettingLocation = false;
          this.location = coordinates;
      } catch (e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
  },

async takePicture(){
  const image = await Camera.getPhoto({
    quality: 90,
    source: CameraSource.Camera,
    resultType: CameraResultType.Uri
  });

  // image.webPath will contain a path that can be set as an image src.
  // You can access the original file using image.path, which can be
  // passed to the Filesystem API to read the raw data of the image,
  // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  var imageUrl = image.webPath;

  // Can be set to the src of an image now
  this.imgSrc = imageUrl;
}
  
  }
}
</script>
<style scoped></style>
