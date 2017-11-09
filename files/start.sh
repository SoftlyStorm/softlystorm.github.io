#!/bin/sh
#/usr/bin/screen -d -m /usr/bin/java -Xmx583M -Xms512M -jar spigot.jar nogui
/usr/bin/screen -d -m /usr/bin/java -Xincgc -Xmx512M -jar spigot.jar nogui
