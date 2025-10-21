@rem ------------------------------------------------------------
@rem Gradle Wrapper startup script for Windows
@rem ------------------------------------------------------------

@if "%DEBUG%" == "" @echo off
@rem Set local scope for the variables
setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any symbolic links
set PRG=%APP_HOME%\%APP_BASE_NAME%.bat
set GRADLE_WRAPPER_JAR=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar

@rem Add default JVM options here (optional)
set DEFAULT_JVM_OPTS=

@rem Launch the wrapper
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% ^
    -classpath "%GRADLE_WRAPPER_JAR%" org.gradle.wrapper.GradleWrapperMain %*

endlocal