package chat_client_server;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.SocketException;
import java.net.UnknownHostException;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.SwingConstants;

public class Client extends JFrame implements ActionListener {
    private static final long serialVersionUID = 1L;
    private Socket s;
    private DataOutputStream socketOutputStream;
    private DataInputStream socketInputStream;
    private boolean bConnected = false;
    private accept accept;
    @
    SuppressWarnings("unused") private Thread acceptThread;
    boolean isConnected = false;
    static String userName = "";
    static boolean readyToSend = false;
    private boolean connected;
    private JLabel label;
    static JTextField tf;
    static JTextField tfServer, tfPort;
    static JButton login, logout, sendMessage;
    static JTextArea ta;
    public Client() {
        JPanel northPanel = new JPanel(new GridLayout(3, 1));
        JPanel serverAndPort = new JPanel(new GridLayout(1, 5, 1, 3));
        tfServer = new JTextField("localhost");
        tfPort = new JTextField("9999");
        tfPort.setHorizontalAlignment(SwingConstants.RIGHT);
        serverAndPort.add(new JLabel("Server Address:  "));
        serverAndPort.add(tfServer);
        serverAndPort.add(new JLabel("Port Number:  "));
        serverAndPort.add(tfPort);
        serverAndPort.add(new JLabel(""));
        northPanel.add(serverAndPort);
        label = new JLabel("Nhập tên và bấm login để vào phòng!", SwingConstants.CENTER);
        northPanel.add(label);
        tf = new JTextField("Anonymous");
        tf.setBackground(Color.WHITE);
        northPanel.add(tf);
        add(northPanel, BorderLayout.NORTH);
        ta = new JTextArea("Chào mừng đến chat room!\n", 80, 80);
        JPanel centerPanel = new JPanel(new GridLayout(1, 1));
        centerPanel.add(new JScrollPane(ta));
        ta.setEditable(false);
        add(centerPanel, BorderLayout.CENTER);
        login = new JButton("Login");
        login.addActionListener(this);
        logout = new JButton("Logout");
        logout.addActionListener(this);
        logout.setEnabled(false);
        sendMessage = new JButton("Send");
        sendMessage.addActionListener(this);
        sendMessage.setEnabled(false);
        JPanel southPanel = new JPanel();
        southPanel.add(login);
        southPanel.add(logout);
        southPanel.add(sendMessage);
        add(southPanel, BorderLayout.SOUTH);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(600, 600);
        setVisible(true);
        tf.requestFocus();
    }
    private void sendMessage() {
        String tempStr;
        tempStr = tf.getText();
        try {
            socketOutputStream.writeUTF(">> " + userName + ": " + tempStr);
            socketOutputStream.flush();
        } catch (IOException e1) {
            System.out.println("Can't output!!");
        }
        tf.setText("");
    }
    void connectionFailed() {
        login.setEnabled(true);
        logout.setEnabled(false);
        sendMessage.setEnabled(false);
        label.setText("Nhập tên và bấm login để vào phòng!");
        tf.setText("Anonymous");
        tfPort.setText("9999");
        tfServer.setText("localhost");
        tfServer.setEditable(false);
        tfPort.setEditable(false);
        tf.removeActionListener(this);
        connected = false;
    }
    @Override
    public void actionPerformed(ActionEvent arg0) {
        Object o = arg0.getSource();
        if (o == logout) {
            try {
                if (isConnected) {
                    bConnected = false;
                    socketInputStream.close();
                    socketOutputStream.close();
                    s.close();
                }
            } catch (IOException e1) {
                System.out.println("Doesn't connected!!");
            }
            connectionFailed();
            return;
        }
        if (o == sendMessage || connected) {
            System.out.println("sending");
            sendMessage();
            return;
        }
        if (o == login) {
            userName = tf.getText().trim();
            if (userName.length() == 0) return;
            String server = tfServer.getText().trim();
            if (server.length() == 0) return;
            String portNumber = tfPort.getText().trim();
            if (portNumber.length() == 0) return;
            int port = 0;
            try {
                port = Integer.parseInt(portNumber);
            } catch (Exception en) {
                return;
            }
            if (connected == false) {
                try {
                    s = new Socket(server, port);
                    socketOutputStream = new DataOutputStream(s.getOutputStream());
                    socketInputStream = new DataInputStream(s.getInputStream());
                    isConnected = true;
                    bConnected = true;
                    accept = new accept(s);
                    Thread acceptThread = new Thread(accept);
                    acceptThread.start();
                } catch (UnknownHostException e1) {
                    System.out.println("Miss Server!!");
                } catch (IOException e1) {
                    System.out.println("Can't output!!");
                }
            }
            tf.setText("");
            label.setText("Nhập tin nhắn và bấm enter hoặc send!");
            connected = true;
            login.setEnabled(false);
            logout.setEnabled(true);
            sendMessage.setEnabled(true);
            tfServer.setEditable(false);
            tfPort.setEditable(false);
            tf.addActionListener(this);
        }
    }
    class accept implements Runnable {
        Socket s;
        accept(Socket s) {
            this.s = s;
        }
        @
        Override public void run() {
            while (bConnected) {
                try {
                    String str = socketInputStream.readUTF();
                    ta.append(str + "\n");
                } catch (SocketException e3) {
                    System.out.println("bye!!");
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    public static void main(String[] args) {
        new Client();
    }
}

