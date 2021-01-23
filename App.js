import codePush from "react-native-code-push";
const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
export default class App extends Component<{}> {

  componentDidMount(){
    codePush.sync({
      updateDialog: true,
      installMode: codePush.InstallMode.IMMEDIATE,
      mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
      //deploymentKey为刚才生成的,用Platform判断下平台
      deploymentKey: Platform.OS === 'ios'?'sYvpLUxuBU9FxICqJ5sccL2GDUPZcc988a73-c917-4dba-bd40-1837998442a6':'fqdFCqLyL4XclNZjWvNN3KNhImR5cc988a73-c917-4dba-bd40-1837998442a6',
    });
  }
}