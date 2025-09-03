import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0);

	statusBarItem.text = "Reload";
	statusBarItem.tooltip = "Reload window";
	statusBarItem.command = "reload.window";
	statusBarItem.show();

	const reloadCommand = vscode.commands.registerCommand('reload.window', () => {
		vscode.commands.executeCommand('workbench.action.reloadWindow');
	});

	context.subscriptions.push(statusBarItem, reloadCommand);
}

export function deactivate() { }