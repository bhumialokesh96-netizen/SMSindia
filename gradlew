#!/bin/sh

# ------------------------------------------------------------
# Gradle Wrapper startup script
# ------------------------------------------------------------

# Resolve links ($0 may be a softlink)
PRG="$0"

while [ -h "$PRG" ] ; do
  ls=`ls -ld "$PRG"`
  link=`expr "$ls" : '.*-> \(.*\)$'`
  if expr "$link" : '.*/.*' > /dev/null; then
    PRG="$link"
  else
    PRG=`dirname "$PRG"`/"$link"
  fi
done

DIR=`dirname "$PRG"`

# Load the wrapper properties
. "$DIR/gradle/wrapper/gradle-wrapper.properties"

# Run Gradle
exec "$DIR/gradle/wrapper/gradle-wrapper.jar" "$@"